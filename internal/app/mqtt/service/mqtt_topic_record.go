// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-06-27 23:24:19
// 生成路径: iotfast/internal/app/service/mqtt_topic_record.go
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

//type mqttTopicRecord struct {
//}
//var MqttTopicRecord = new(mqttTopicRecord)
type IMqttTopicRecord interface {
	List(ctx context.Context, req *mqtt.MqttTopicRecordSearchReq) (total, page int, list []*entity.MqttTopicRecord, err error)
	Get(ctx context.Context, id int) (info *entity.MqttTopicRecord, err error)
	Add(ctx context.Context, req *mqtt.MqttTopicRecordAddReq) (err error)
	Edit(ctx context.Context, req *mqtt.MqttTopicRecordEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type mqttTopicRecordImpl struct {
}

var mqttTopicRecordService = mqttTopicRecordImpl{}

func MqttTopicRecord() IMqttTopicRecord {
	return &mqttTopicRecordService
}

// List 获取任务列表
func (s *mqttTopicRecordImpl) List(ctx context.Context, req *mqtt.MqttTopicRecordSearchReq) (total, page int, list []*entity.MqttTopicRecord, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.MqttTopicRecord.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.MqttTopicRecord.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Topic != "" {
		m = m.Where(dao.MqttTopicRecord.Columns().Topic+" like ?", "%"+req.Topic+"%")
	}
	if req.Qos != "" {
		m = m.Where(dao.MqttTopicRecord.Columns().Qos+" = ?", req.Qos)
	}
	if req.CreatTime != "" {
		m = m.Where(dao.MqttTopicRecord.Columns().CreatTime+" = ?", req.CreatTime)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取MqttTopicRecord列表失败")
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
func (s *mqttTopicRecordImpl) Get(ctx context.Context, id int) (info *entity.MqttTopicRecord, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.MqttTopicRecord.Ctx(ctx).Where(dao.MqttTopicRecord.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *mqttTopicRecordImpl) Add(ctx context.Context, req *mqtt.MqttTopicRecordAddReq) (err error) {
	_, err = dao.MqttTopicRecord.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *mqttTopicRecordImpl) Edit(ctx context.Context, req *mqtt.MqttTopicRecordEditReq) error {
	_, err := dao.MqttTopicRecord.Ctx(ctx).FieldsEx(dao.MqttTopicRecord.Columns().Id).Where(dao.MqttTopicRecord.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *mqttTopicRecordImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.MqttTopicRecord.Ctx(ctx).Delete(dao.MqttTopicRecord.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
