package libCodec

import (
	"bytes"
	"context"
	"encoding/gob"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/xiaodingding/iotfast/api/v1/device"
	DeviceConsts "github.com/xiaodingding/iotfast/internal/app/device/consts"
	"github.com/xiaodingding/iotfast/internal/app/device/model"
	deviceService "github.com/xiaodingding/iotfast/internal/app/device/service"
)

type mqttCodecImpl struct {
}

func init() {
	Register("mqtt", MqttCodec())
}

var mqttCodecService = mqttCodecImpl{}

func MqttCodec() Codec {
	return &mqttCodecService
}

//解码
func (c *mqttCodecImpl) Encode(ctx context.Context, dataContent interface{}) (dmesg *DeviceDecodeMsg, err error) {

	// var deviceInfo *model.DeviceAllInfo
	var dtime *gtime.Time
	if nil == dataContent {
		return nil, gerror.Newf("device parse dataContent is nil, dataContent:%v", dataContent)
	}

	msgData := gconv.Map(dataContent)
	if nil == msgData {
		g.Log().Error(ctx, "parse recv msg data error, data:", gconv.String(dataContent))
		return nil, gerror.Newf("device byte data parse error!")
	}

	if sn, isExist := msgData["sn"]; isExist {
		dmesg.deviceInfo, err = c.GetDeviceInfo(ctx, 0, gconv.String(sn))
		if dmesg.deviceInfo == nil || err != nil {
			return
		}
	} else if id, isExist := msgData["id"]; isExist {
		dmesg.deviceInfo, err = c.GetDeviceInfo(ctx, gconv.Int(id), "")
		if dmesg.deviceInfo == nil || err != nil {
			return
		}
	}

	dmesg = &DeviceDecodeMsg{}
	var index int

	if pData, isExist := msgData["properties"]; isExist {

		jsonContent := gjson.New(pData)
		dmesg.dataList = make([]*DeviceData, len(dmesg.deviceInfo.CategoryList))
		index = 0

		for _, category := range dmesg.deviceInfo.CategoryList {
			dmesg.dataList[index].CategoryId = category.Id
			dmesg.dataList[index].Name = category.Mark
			dmesg.dataList[index].Type = category.DataType
			dmesg.dataList[index].Ratio = category.Ratio
			dmesg.dataList[index].Data = jsonContent.Get(category.Mark)
			dtime = jsonContent.Get("time").GTime()
			if nil == dtime {
				dtime = gtime.Now()
			}
			dmesg.dataList[index].Time = dtime
			index = index + 1
		}

	}

	if pEvent, isExist := msgData["event"]; isExist {
		jsonContent := gconv.MapStrStr(pEvent)
		dmesg.eventList = make([]*DeviceEvent, len(jsonContent))
		index = 0
		for key, value := range jsonContent {
			dmesg.eventList[index].Name = key
			dmesg.eventList[index].Data = value
			index = index + 1
		}
	}

	return
}

func (c *mqttCodecImpl) GetDeviceInfo(ctx context.Context, deviceId int, deviceSn string) (info *model.DeviceAllInfo, err error) {
	info = &model.DeviceAllInfo{}
	info, err = deviceService.DeviceInfo().GetAllInfo(ctx, deviceId, deviceSn)
	return
}

func (c *mqttCodecImpl) Save(ctx context.Context, dmesg *DeviceDecodeMsg) error {
	if nil == dmesg {
		return gerror.New("param is null")
	}

	var err error
	if len(dmesg.dataList) > 0 {
		req := &device.DeviceCategoryDataAddReq{}
		for _, data := range dmesg.dataList {
			req.CategoryId = data.CategoryId
			req.DeviceId = dmesg.deviceInfo.Info.Id
			switch data.Type {
			case DeviceConsts.CategoryDataTypeBit:
			case DeviceConsts.CategoryDataTypeByte:
			case DeviceConsts.CategoryDataTypeShort:
			case DeviceConsts.CategoryDataTypeUnShort:
			case DeviceConsts.CategoryDataTypeInt:
			case DeviceConsts.CategoryDataTypeUnInt:
				req.DataInt = gconv.Uint(data.Data)
				if data.Ratio != "" && len(data.Ratio) > 0 {
					req.DataInt = gconv.Uint(gconv.Float64(req.DataInt) * gconv.Float64(data.Ratio))
				}
			case DeviceConsts.CategoryDataTypeFloat:
			case DeviceConsts.CategoryDataTypeDouble:
				req.DataDouble = gconv.Float64(data.Data)

				if data.Ratio != "" && len(data.Ratio) > 0 {
					req.DataDouble = gconv.Float64(req.DataDouble) * gconv.Float64(data.Ratio)
				}

			default:
				req.DataStr = gconv.String(data.Data)
			}
			err = deviceService.DeviceCategoryData().Add(ctx, req)
			if err != nil {
				return err
			}
		}
	}

	return nil
}

// 编码
func (c *mqttCodecImpl) Decode(ctx context.Context, msg DeviceData) (interface{}, error) {
	var buf bytes.Buffer
	enc := gob.NewEncoder(&buf)
	err := enc.Encode(msg)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}
