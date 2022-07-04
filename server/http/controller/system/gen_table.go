/*
* @desc:部门管理
* @url:www.ddsiot.cn
* @Author: dwx<dwxdyx@qq.com>
* @Date:   2022/4/6 15:15
 */

package controller

import (
	"context"
	"iotfast/api/v1/system"
	"iotfast/internal/app/system/model"
	"iotfast/internal/app/system/model/entity"
	"iotfast/internal/app/system/service"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/util/gconv"
)

var Gen = genTableController{}

type genTableController struct {
	BaseController
}

//GetDbTable 获取系统库里面所有的表信息
func (c *genTableController) GetDbTable(ctx context.Context, req *system.GenDbSearchReq) (res *system.GenDbSearchRes, err error) {
	res = &system.GenDbSearchRes{}
	res, err = service.SysGenTable().SelectDbTableList(ctx, req)
	return
}

//TableList 获取表列表
func (c *genTableController) TableList(ctx context.Context, req *system.GenTableSearchReq) (res *system.GenTableSearchRes, err error) {
	res = &system.GenTableSearchRes{}
	res.Total, res.List, err = service.SysGenTable().SelectListByPage(ctx, req)
	return
}

//ImportGenTable 导入表信息
func (c *genTableController) ImportGenTable(ctx context.Context, req *system.GenTableImportReq) (res *system.GenTableImportRes, err error) {
	res = &system.GenTableImportRes{}
	if len(req.Tables) < 1 {
		err = gerror.New("请选择要导入的表格")
		return
	}
	tableList, err := service.SysGenTable().SelectDbTableListByNames(ctx, req.Tables)
	if err != nil {
		return
	}
	if tableList == nil {
		err = gerror.New("表信息不存在")
		return
	}
	err = service.SysGenTable().ImportGenTable(ctx, tableList)
	if err != nil {
		return
	}
	return
}

// ColumnList 获取表格字段列表数据
func (c *genTableController) ColumnList(ctx context.Context, req *system.GenTableColumnSearchReq) (res *system.GenTableColumnSearchRes, err error) {
	res = &system.GenTableColumnSearchRes{}
	if req.TableId == 0 {
		err = gerror.New("参数错误")
		return
	}
	res.Rows, err = service.GenTableColumn().SelectGenTableColumnListByTableId(ctx, req.TableId)
	if err != nil {
		return
	}
	var tableInfo *entity.SysGenTable
	tableInfo, err = service.SysGenTable().GetTableInfoByTableId(ctx, req.TableId)
	if err != nil {
		return
	}
	res.Info = gconv.Map(tableInfo)
	//如果是树表则设置树表配置
	if tableInfo != nil && tableInfo.TplCategory == "tree" {
		options := gjson.New(tableInfo.Options)
		res.Info["treeCode"] = options.Get("treeCode")
		res.Info["treeParentCode"] = options.Get("treeParentCode")
		res.Info["treeName"] = options.Get("treeName")
	} else {
		res.Info["treeCode"] = ""
		res.Info["treeParentCode"] = ""
		res.Info["treeName"] = ""

	}
	return
}

// Edit 修改表和列信息
func (c *genTableController) Edit(ctx context.Context, req *system.GenTableEditReq) (res *system.GenTableEditRes, err error) {
	err = service.SysGenTable().SaveEdit(ctx, req)
	return
}

// Delete 删除表信息
func (c *genTableController) Delete(ctx context.Context, req *system.GenTableDelReq) (res *system.GenTableDelRes, err error) {
	err = service.SysGenTable().Delete(ctx, req.Ids)
	return
}

//Preview 代码生成预览
func (c *genTableController) Preview(ctx context.Context, req *system.GenCodePreviewReq) (res *system.GenCodePreviewRes, err error) {
	res = &system.GenCodePreviewRes{}
	res.Code, _, err = service.SysGenTable().GenData(ctx, req.TableId)
	return
}

//DownGenCode 下载生成的代码
func (c *genTableController) DownGenCode(ctx context.Context, req *system.GenCodeDownReq) (res *system.GenCodeRes, err error) {
	err = service.SysGenTable().BatchGenCode(ctx, req.Ids, c.Request)
	return
}

//GenCode 自动生成的代码
func (c *genTableController) GenCode(ctx context.Context, req *system.GenCodeReq) (res *system.GenCodeRes, err error) {
	err = service.SysGenTable().GenCode(ctx, req.Ids)
	return
}

// RelationTable 获取可选的关联表
func (c *genTableController) RelationTable(ctx context.Context, req *system.GenCodSingleRelationReq) (res *system.GenCodRelationRes, err error) {
	//获取表数据列表
	res = &system.GenCodRelationRes{}
	search := &system.GenTableSearchReq{}

	search.BeginTime = req.BeginTime
	search.EndTime = req.EndTime
	search.TableName = req.TableName
	search.TableComment = req.TableComment
	search.OrderBy = req.OrderBy
	search.PageNum = req.PageNum
	search.PageReq = req.PageReq
	search.PageSize = req.PageSize

	_, tableList, err := service.SysGenTable().SelectListByPage(ctx, search)
	if err != nil {
		return
	}
	//获取所有字段
	allColumns, err := service.GenTableColumn().GetAllTableColumns(ctx)
	if err != nil {
		return
	}
	tableColumns := make([]*system.GenCodSingleRelation, len(tableList))
	for k, v := range tableList {
		tableColumns[k] = &system.GenCodSingleRelation{
			SysGenTable: v,
			Columns:     make([]*model.SysGenTableColumn, 0),
		}
		for _, cv := range allColumns {
			if cv.TableId == v.TableId {
				tableColumns[k].Columns = append(tableColumns[k].Columns, cv)
			}
		}
	}
	res.List = tableColumns

	return
}

//sys_auth_rule,sys_user_online
