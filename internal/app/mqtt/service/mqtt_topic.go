// ==========================================================================
// 物联网快速开发自动生成业务逻辑层相关代码，只生成一次，按需修改,再次生成不会覆盖.
// 生成日期：2022-07-02 23:41:34
// 生成路径: github.com/xiaodingding/iotfast/internal/app/service/mqtt_topic.go
// 生成人：dwx
// ==========================================================================

package service

import (
	"context"

	"github.com/xiaodingding/iotfast/api/v1/mqtt"
	"github.com/xiaodingding/iotfast/internal/app/mqtt/dao"
	"github.com/xiaodingding/iotfast/internal/app/mqtt/model/entity"
	systemConsts "github.com/xiaodingding/iotfast/internal/app/system/consts"
	"github.com/xiaodingding/iotfast/library/libErr"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

//type mqttTopic struct {
//}
//var MqttTopic = new(mqttTopic)
type IMqttTopic interface {
	List(ctx context.Context, req *mqtt.MqttTopicSearchReq) (total, page int, list []*entity.MqttTopic, err error)
	Get(ctx context.Context, id int) (info *entity.MqttTopic, err error)
	Add(ctx context.Context, req *mqtt.MqttTopicAddReq) (err error)
	Edit(ctx context.Context, req *mqtt.MqttTopicEditReq) error
	DeleteByIds(ctx context.Context, ids []int) (err error)
}
type mqttTopicImpl struct {
}

var mqttTopicService = mqttTopicImpl{}

func MqttTopic() IMqttTopic {
	return &mqttTopicService
}

// List 获取任务列表
func (s *mqttTopicImpl) List(ctx context.Context, req *mqtt.MqttTopicSearchReq) (total, page int, list []*entity.MqttTopic, err error) {
	if req.PageNum == 0 {
		req.PageNum = 1
	}
	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	m := dao.MqttTopic.Ctx(ctx)
	if req.Name != "" {
		m = m.Where(dao.MqttTopic.Columns().Name+" like ?", "%"+req.Name+"%")
	}
	if req.Topic != "" {
		m = m.Where(dao.MqttTopic.Columns().Topic+" = ?", req.Topic)
	}
	if req.Qos != "" {
		m = m.Where(dao.MqttTopic.Columns().Qos+" = ?", req.Qos)
	}
	err = g.Try(func() {
		total, err = m.Count()
		libErr.ErrPrint(ctx, err, "获取MqttTopic列表失败")
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
func (s *mqttTopicImpl) Get(ctx context.Context, id int) (info *entity.MqttTopic, err error) {
	if id == 0 {
		err = gerror.New("参数错误")
		return
	}
	err = dao.MqttTopic.Ctx(ctx).Where(dao.MqttTopic.Columns().Id, id).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
	}
	if info == nil || err != nil {
		err = gerror.New("获取信息失败")
	}
	return
}

// Add 添加
func (s *mqttTopicImpl) Add(ctx context.Context, req *mqtt.MqttTopicAddReq) (err error) {
	_, err = dao.MqttTopic.Ctx(ctx).Insert(req)
	return
}

// Edit 修改
func (s *mqttTopicImpl) Edit(ctx context.Context, req *mqtt.MqttTopicEditReq) error {
	_, err := dao.MqttTopic.Ctx(ctx).FieldsEx(dao.MqttTopic.Columns().Id, dao.MqttTopic.Columns().CreatedAt).Where(dao.MqttTopic.Columns().Id, req.Id).
		Update(req)
	return err
}

// DeleteByIds 删除
func (s *mqttTopicImpl) DeleteByIds(ctx context.Context, ids []int) (err error) {
	if len(ids) == 0 {
		err = gerror.New("参数错误")
		return
	}
	_, err = dao.MqttTopic.Ctx(ctx).Delete(dao.MqttTopic.Columns().Id+" in (?)", ids)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("删除失败")
	}
	return
}
