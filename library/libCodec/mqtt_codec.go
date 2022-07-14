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
	// var index int
	// var deviceInfo *model.DeviceAllInfo
	var ntime *gtime.Time
	if nil == dataContent {
		g.Log().Errorf(ctx, "param is nil dataContent:%v", dataContent)
		return nil, gerror.Newf("device parse dataContent is nil, dataContent:%v", dataContent)
	}

	jsonContent := gjson.New(dataContent)
	if nil == jsonContent {
		g.Log().Error(ctx, "parse recv msg data error, data:", gconv.String(dataContent))
		return nil, gerror.Newf("device byte data parse error!")
	}

	dmesg = &DeviceDecodeMsg{}

	// g.Log().Print(ctx, "map jsonContent:", jsonContent, jsonContent.Get("deviceSn"), jsonContent.Get("deviceId"))

	if sn := jsonContent.Get("deviceSn"); sn != nil {
		dmesg.deviceInfo, err = deviceService.DeviceInfo().GetAllInfo(ctx, 0, gconv.String(sn))
		if err != nil {
			g.Log().Errorf(ctx, "get deviceinfo err:%v, info:%v", err, dmesg.deviceInfo)
			return
		}
	} else if id := jsonContent.Get("deviceId"); id != nil {
		dmesg.deviceInfo, err = deviceService.DeviceInfo().GetAllInfo(ctx, gconv.Int(id), "")
		if err != nil {
			g.Log().Errorf(ctx, "get deviceinfo err:%v, info:%v", err, dmesg.deviceInfo)
			return
		}
	}

	ntime = jsonContent.Get("time").GTime()

	// g.Log().Print(ctx, "time:", ntime, jsonContent.Get("time"))

	if nil == dmesg.deviceInfo {
		err = gerror.New("get deviceinfo nil")
		g.Log().Errorf(ctx, "get deviceinfo nil, info:%v", dmesg.deviceInfo)
		return
	}

	// g.Log().Print(ctx, "get info:", jsonContent.Get("property"), jsonContent.Get("event"))

	if pData := jsonContent.Get("property"); pData != nil {
		jsonDataContent := gjson.New(pData)

		// g.Log().Print(ctx, "parse param :", jsonDataContent, "pData:", pData)

		for _, category := range dmesg.deviceInfo.CategoryList {
			// g.Log().Print(ctx, "get param time:", jsonContent.Get("Time"), jsonDataContent.Get("time"))
			var dtime *gtime.Time
			dtime = jsonDataContent.Get("time").GTime()

			if nil == dtime && ntime != nil {
				// dtime = gtime.Now()
				dtime = ntime
			} else {
				dtime = gtime.Now()
			}

			// g.Log().Print(ctx, "pdata time:", ntime, dtime)

			// dmesg.dataList[index].Time = dtime
			// index = index + 1
			pdata := &DeviceData{
				CategoryId: category.Id,
				Name:       category.Mark,
				Type:       category.DataType,
				Ratio:      category.Ratio,
				Data:       jsonDataContent.Get(category.Mark),
				Time:       dtime,
			}
			dmesg.dataList = append(dmesg.dataList, pdata)
		}

	}

	if pEvent := jsonContent.Get("event"); pEvent != nil {

		jsonContent := gconv.MapStrStr(pEvent)
		// dmesg.eventList = make([]*DeviceEvent, len(jsonContent))
		// g.Log().Print(ctx, "pEvent:", pEvent, "jsonContent:", jsonContent)

		for key, value := range jsonContent {
			pevent := &DeviceEvent{
				Name: key,
				Data: value,
			}
			dmesg.eventList = append(dmesg.eventList, pevent)
		}
	}

	// g.Log().Print(ctx, "get dmesg:", dmesg)
	return dmesg, nil
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
			req.CreatedAt = data.Time
			switch data.Type {
			case DeviceConsts.CategoryDataTypeBit:
				fallthrough
			case DeviceConsts.CategoryDataTypeByte:
				fallthrough
			case DeviceConsts.CategoryDataTypeShort:
				fallthrough
			case DeviceConsts.CategoryDataTypeUnShort:
				fallthrough
			case DeviceConsts.CategoryDataTypeInt:
				fallthrough
			case DeviceConsts.CategoryDataTypeUnInt:
				req.DataInt = gconv.Uint(data.Data)
				if data.Ratio != "" && len(data.Ratio) > 0 {
					req.DataInt = gconv.Uint(gconv.Float64(req.DataInt) * gconv.Float64(data.Ratio))
				}
				// g.Log().Print(ctx, "save int", req.DataDouble, data.Data)
			case DeviceConsts.CategoryDataTypeFloat:
				fallthrough
			case DeviceConsts.CategoryDataTypeDouble:
				req.DataDouble = gconv.Float64(data.Data)

				if data.Ratio != "" && len(data.Ratio) > 0 {
					req.DataDouble = gconv.Float64(req.DataDouble) * gconv.Float64(data.Ratio)
				}
				// g.Log().Print(ctx, "save float", req.DataDouble, data.Data)
			default:
				req.DataStr = gconv.String(data.Data)
				// g.Log().Print(ctx, "save string", req.DataDouble, data.Data)
			}
			g.Log().Print(ctx, "save data info", req, data)
			err = deviceService.DeviceCategoryData().New(ctx, req)
			if err != nil {
				g.Log().Errorf(ctx, "save device data err:%v", err)
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
