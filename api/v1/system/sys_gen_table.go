package system

import (
	commonApi "github.com/xiaodingding/iotfast/api/v1/common"
	"github.com/xiaodingding/iotfast/internal/app/system/model"
	"github.com/xiaodingding/iotfast/internal/app/system/model/entity"

	"github.com/gogf/gf/v2/frame/g"
)

// GenTableSearchReq 查询列表请求参数
type GenDbSearchReq struct {
	g.Meta       `path:"/gen/getDbTable" tags:"代码生成" method:"get" summary:"库表信息列表"`
	TableName    string `p:"tableName"`    // 表名称
	TableComment string `p:"tableComment"` // 表描述
	BeginTime    string `p:"beginTime"`    //开始时间
	EndTime      string `p:"endTime"`      //结束时间
	commonApi.PageReq
}

type GenDbSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.SysGenTable `json:"list"`
}

// GenTableSearchReq 查询列表请求参数
type GenTableSearchReq struct {
	g.Meta       `path:"/gen/tableList" tags:"代码生成" method:"get" summary:"表信息列表"`
	TableName    string // 表名称
	TableComment string // 表描述
	BeginTime    string //开始时间
	EndTime      string //结束时间
	commonApi.PageReq
}

type GenTableSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	List []*entity.SysGenTable `json:"list"`
}

type GenTableImportReq struct {
	g.Meta `path:"/gen/tableImport" tags:"代码生成" method:"post" summary:"导入表"`
	Tables []string `p:"tables" v:"required#tables必须"`
}

type GenTableImportRes struct {
}

//修改页面请求参数
type GenTableEditReq struct {
	g.Meta         `path:"/gen/edit" tags:"代码生成" method:"put" summary:"修改表和列信息"`
	TableId        int64                       `p:"tableId" v:"required#主键ID不能为空"`
	TableName      string                      `p:"tableName"  v:"required#表名称不能为空"`
	TableComment   string                      `p:"tableComment"  v:"required#表描述不能为空"`
	ClassName      string                      `p:"className" v:"required#实体类名称不能为空"`
	FunctionAuthor string                      `p:"functionAuthor"  v:"required#作者不能为空"`
	TplCategory    string                      `p:"tplCategory"`
	PackageName    string                      `p:"packageName" v:"required#生成包路径不能为空"`
	ModuleName     string                      `p:"moduleName" v:"required#生成模块名不能为空"`
	BusinessName   string                      `p:"businessName" v:"required#生成业务名不能为空"`
	FunctionName   string                      `p:"functionName" v:"required#生成功能名不能为空"`
	Remark         string                      `p:"remark"`
	Params         string                      `p:"params"`
	Columns        []*entity.SysGenTableColumn `p:"columns"`
	TreeCode       string                      `p:"tree_code"`
	TreeParentCode string                      `p:"tree_parent_code"`
	TreeName       string                      `p:"tree_name"`
	UserName       string
}

type GenTableEditRes struct {
}

type GenTableDelReq struct {
	g.Meta `path:"/gen/delete" tags:"代码生成" method:"delete" summary:"删除表"`
	Ids    []int64 `p:"ids" v:"required#ids必须"`
}

type GenTableDelRes struct {
}

type GenTableClearReq struct {
	g.Meta `path:"/gen/tableClear" tags:"代码生成" method:"delete" summary:"清除表"`
}

type GenTableClearRes struct {
}

type GenTableColumnSearchReq struct {
	g.Meta  `path:"/gen/columnList" tags:"代码生成" method:"get" summary:"获取表格字段列表数据"`
	TableId int64 // 表Id
	commonApi.PageReq
}

type GenTableColumnSearchRes struct {
	g.Meta `mime:"application/json"`
	commonApi.ListRes
	Rows []*entity.SysGenTableColumn `json:"list"`
	Info g.Map
}

type GenCodePreviewReq struct {
	g.Meta  `path:"/gen/preview" tags:"代码生成" method:"get" summary:"生成预览"`
	TableId int64 `p:"tableId" v:"required#tableId必须"` // 表Id
}

type GenCodePreviewRes struct {
	g.Meta `mime:"application/json"`
	Code   g.MapStrStr `json:"code"`
}

type GenCodeDownReq struct {
	g.Meta `path:"/gen/downGenCode" tags:"代码生成" method:"put" summary:"生成生成并下载"`
	Ids    []int64 `p:"ids" v:"required#ids必须"` // 表Id
}

type GenCodeDownRes struct {
}

type GenCodeReq struct {
	g.Meta `path:"/gen/genCode" tags:"代码生成" method:"put" summary:"自动生成代码"`
	Ids    []int64 `p:"ids" v:"required#ids必须"` // 表Id
}

type GenCodeRes struct {
}

// GenCodSingleRelationReq 获取可选的关联表
type GenCodSingleRelationReq struct {
	g.Meta       `path:"/gen/relationTable" tags:"代码生成" method:"get" summary:"获取可选的关联表"`
	TableName    string // 表名称
	TableComment string // 表描述
	BeginTime    string //开始时间
	EndTime      string //结束时间
	commonApi.PageReq
}

type GenCodSingleRelation struct {
	*entity.SysGenTable
	Columns []*model.SysGenTableColumn `json:"columns"`
}

// ToolsGenTableColumnsRes 表与字段组合数据
type GenCodRelationRes struct {
	g.Meta `mime:"application/json"`
	List   []*GenCodSingleRelation `json:"list"`
}
