// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-27 23:24:18
// 生成路径: iotfast/internal/app/service/mqtt_msg_record.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"
	"iotfast/api/v1/mqtt"
	"iotfast/internal/app/mqtt/dao"
	"iotfast/internal/app/mqtt/model/entity"
	systemConsts "iotfast/internal/app/system/consts"
	"iotfast/library/libErr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

//type mqttMsgRecord struct {
//}
//var MqttMsgRecord = new(mqttMsgRecord)
type IMqttMsgRecord interface {
	List(ctx context.Context, req *mqtt.MqttMsgRecordSearchReq) (total, page int, list []*entity.MqttMsgRecord, err error)
	Get(ctx context.Context, id int) (info *entity.MqttMsgRecord, err error)
	Add(ctx context.Context, req *mqtt.MqttMsgRecordAddReq) (err error)
	Edit(ctx context.Context, req *mqtt.MqttMsgRecordEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type mqttMsgRecordImpl struct {
}

var mqttMsgRecordService = mqttMsgRecordImpl{}

func MqttMsgRecord() IMqttMsgRecord {
	return &mqttMsgRecordService
}

// List 获取任务列表
func (s *mqttMsgRecordImpl) List(ctx context.Context, req *mqtt.MqttMsgRecordSearchReq) (total, page int, list []*entity.MqttMsgRecord, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.MqttMsgRecord.Ctx(ctx)
	if req.DeviceSn != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().DeviceSn+" like ?", "%"+req.DeviceSn+"%")
	}
	if req.TopicId != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().TopicId+" = ?", req.TopicId)
	}
	if req.ClientName != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().ClientName+" like ?", "%"+req.ClientName+"%")
	}
	if req.ClientId != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().ClientId+" = ?", req.ClientId)
	}
	if req.Qos != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().Qos+" = ?", req.Qos)
	}
	if req.Payload != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().Payload+" = ?", req.Payload)
	}
	if req.CreatTime != "" {
		m = m.Where(dao.MqttMsgRecord.Columns().CreatTime+" = ?", req.CreatTime)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取MqttMsgRecord列表失败")
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取总行数失败")
			return
		}
		order := "id asc"
		if req.OrderBy != "" {
			order = req.OrderBy
		}
		err = m.Page(page, req.PageSize).Order(order).Scan(&list)
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取数据失败")
		}
	})
	return
}

// Get 通过id获取
func (s *mqttMsgRecordImpl) Get(ctx context.Context, id int) (info *entity.MqttMsgRecord, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.MqttMsgRecord.Ctx(ctx).Where(dao.MqttMsgRecord.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *mqttMsgRecordImpl) Add(ctx context.Context, req *mqtt.MqttMsgRecordAddReq) (err error) {
	_, err = dao.MqttMsgRecord.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *mqttMsgRecordImpl) Edit(ctx context.Context, req *mqtt.MqttMsgRecordEditReq) error {
	_, err := dao.MqttMsgRecord.Ctx(ctx).FieldsEx(dao.MqttMsgRecord.Columns().Id).Where(dao.MqttMsgRecord.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *mqttMsgRecordImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.MqttMsgRecord.Ctx(ctx).Delete(dao.MqttMsgRecord.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
