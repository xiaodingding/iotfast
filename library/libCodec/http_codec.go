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

type httpCodecImpl struct {
}

func init() {
	Register("http", HttpCodec())
}

var httpCodecService = httpCodecImpl{}

func HttpCodec() Codec {
	return &httpCodecService
}

//解码
func (c *httpCodecImpl) Encode(ctx context.Context, dataContent interface{}) (dmesg *DeviceDecodeMsg, err error) {
	var msgCon *device.DeviceDataAddReq
	// var deviceInfo *model.DeviceAllInfo

	if nil == dataContent {
		return nil, gerror.Newf("device parse dataContent is nil, dataContent:%v", dataContent)
	}

	dmesg = &DeviceDecodeMsg{}

	// g.Log().Print(ctx, "dataContent:", dataContent)

	msgCon, ok := dataContent.(*device.DeviceDataAddReq)

	if !ok {
		g.Log().Printf(ctx, "interface to type err")
		return nil, gerror.Newf("param errror")
	}

	// g.Log().Print(ctx, "msgCon:", msgCon)

	dmesg.deviceInfo, err = deviceService.DeviceInfo().GetAllInfo(ctx, msgCon.DeviceId, msgCon.DeviceSn)
	if err != nil {
		g.Log().Errorf(ctx, "get deviceinfo err:%v, info:%v", err, dmesg.deviceInfo)
		return
	}

	if dmesg.deviceInfo == nil {
		g.Log().Debug(ctx, "get deviceInfo failed")
		return nil, gerror.New("get deviceInfo failed")
	}

	if msgCon.Property != nil && len(dmesg.deviceInfo.CategoryList) > 0 {
		jsonContent := gjson.New(msgCon.Property)

		// g.Log().Print(ctx, "parse param :", jsonContent)

		for _, category := range dmesg.deviceInfo.CategoryList {
			// g.Log().Print(ctx, "get param time:", jsonContent.Get("Time"), jsonContent.Get("time"))
			var dtime *gtime.Time

			if nil == dtime {
				// dtime = gtime.Now()
				dtime = gtime.NewFromStr(msgCon.Time)
			}

			if nil == dtime {
				dtime = gtime.Now()
			}

			// dmesg.dataList[index].Time = dtime
			// index = index + 1
			pdata := &DeviceData{
				CategoryId: category.Id,
				Name:       category.Mark,
				Type:       category.DataType,
				Ratio:      category.Ratio,
				Data:       jsonContent.Get(category.Mark),
				Time:       dtime,
			}
			dmesg.dataList = append(dmesg.dataList, pdata)
		}

	}

	if msgCon.Event != nil {
		jsonContent := gconv.MapStrStr(msgCon.Event)
		// dmesg.eventList = make([]*DeviceEvent, len(jsonContent))
		for key, value := range jsonContent {
			pevent := &DeviceEvent{
				Name: key,
				Data: value,
			}
			dmesg.eventList = append(dmesg.eventList, pevent)
		}
	}

	// g.Log().Print(ctx, "encode device indo:", dmesg.dataList, dmesg.eventList)
	return dmesg, nil
}

func (c *httpCodecImpl) GetDeviceInfo(ctx context.Context, deviceId int, deviceSn string) (info *model.DeviceAllInfo, err error) {
	// info = &model.DeviceAllInfo{}
	info, err = deviceService.DeviceInfo().GetAllInfo(ctx, deviceId, deviceSn)
	return
}

func (c *httpCodecImpl) Save(ctx context.Context, dmesg *DeviceDecodeMsg) error {
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
			// g.Log().Print(ctx, "save data info", req, data)
			err = deviceService.DeviceCategoryData().New(ctx, req)
			if err != nil {
				g.Log().Errorf(ctx, "save device data err:%v", err)
				return err
			}
		}
		deviceService.DeviceStatus().ChangeStatus(ctx, dmesg.GetDeviceInfo().Info.Id, DeviceConsts.DeviceStatusOnLine)
	}

	return nil
}

// 编码
func (c *httpCodecImpl) Decode(ctx context.Context, msg DeviceData) (interface{}, error) {
	var buf bytes.Buffer
	enc := gob.NewEncoder(&buf)
	err := enc.Encode(msg)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}
