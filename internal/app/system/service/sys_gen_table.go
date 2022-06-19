/*
* @desc:代码生成功能
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/3/8 11:42
 */

package service

import (
	"bufio"
	"context"
	"database/sql"
	"fmt"
	"io"
	"iotfast/api/v1/system"
	"unicode"

	//comService "iotfast/internal/app/common/service"
	systemConsts "iotfast/internal/app/system/consts"
	"iotfast/internal/app/system/dao"
	"iotfast/internal/app/system/model"
	"iotfast/internal/app/system/model/entity"
	"iotfast/library/liberr"
	"os"
	"strings"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/encoding/gcompress"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/os/gview"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
)

type ISysGenTable interface {
	SelectListByPage(ctx context.Context, req *system.GenTableSearchReq) (total int, list []*entity.SysGenTable, err error)
	SelectDbTableList(ctx context.Context, req *system.GenDbSearchReq) (res *system.GenDbSearchRes, err error)
	SelectDbTableListByNames(ctx context.Context, tableNames []string) ([]*entity.SysGenTable, error)
	ImportGenTable(ctx context.Context, tableList []*entity.SysGenTable) error
	Delete(ctx context.Context, ids []int64) error
	SaveEdit(ctx context.Context, req *system.GenTableEditReq) (err error)
	GetTableInfoByTableId(ctx context.Context, tableId int64) (info *entity.SysGenTable, err error)
	GenData(ctx context.Context, tableId int64) (data g.MapStrStr, extendData *model.SysGenTableEntityExtend, err error)
	BatchGenCode(ctx context.Context, tableIds []int64, r *ghttp.Request) (err error)
	GenCode(ctx context.Context, ids []int64) (err error)
}

type sysGenTableImpl struct {
}

var sysGenTableService = sysGenTableImpl{}

func SysGenTable() ISysGenTable {
	return &sysGenTableService
}

// SelectListByPage 查询已导入的数据表
func (s *sysGenTableImpl) SelectListByPage(ctx context.Context, req *system.GenTableSearchReq) (total int, list []*entity.SysGenTable, err error) {
	model := dao.SysGenTable.Ctx(ctx)
	if req != nil {
		if req.TableName != "" {
			model = model.Where(dao.SysGenTable.Columns().TableName+" like ?", "%"+req.TableName+"%")
		}
		if req.TableComment != "" {
			model = model.Where(dao.SysGenTable.Columns().TableComment+"like ?", "%"+req.TableComment+"%")
		}
		if req.BeginTime != "" {
			model = model.Where(dao.SysGenTable.Columns().CreateTime+" >= ", req.BeginTime)
		}
		if req.EndTime != "" {
			model = model.Where(dao.SysGenTable.Columns().CreateTime+" <= ", req.EndTime)
		}
		total, err = model.Count()
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取总行数失败")
			return
		}
		if req.PageNum == 0 {
			req.PageNum = 1
		}
		if req.PageSize == 0 {
			req.PageSize = systemConsts.PageSize
		}
		err = model.Page(req.PageNum, req.PageSize).Order(dao.SysGenTable.Columns().TableId + " asc").Scan(&list)
		if err != nil {
			g.Log().Error(ctx, err)
			err = gerror.New("获取数据失败")
		}
	}
	return
}

// SelectDbTableList 查询据库表
func (s *sysGenTableImpl) SelectDbTableList(ctx context.Context, req *system.GenDbSearchReq) (res *system.GenDbSearchRes, err error) {
	res = &system.GenDbSearchRes{}
	db := g.DB()
	if s.getDbDriver() != "mysql" {
		err = gerror.New("代码生成暂时只支持mysql数据库")
		return
	}
	sql := " from information_schema.tables where table_schema = (select database())" +
		" and table_name NOT LIKE 'qrtz_%' AND table_name NOT LIKE 'gen_%' and table_name NOT IN (select table_name from " + dao.SysGenTable.Table() + ") "
	if req != nil {
		if req.TableName != "" {
			sql += gdb.FormatSqlWithArgs(" and lower(table_name) like lower(?)", []interface{}{"%" + req.TableName + "%"})
		}

		if req.TableComment != "" {
			sql += gdb.FormatSqlWithArgs(" and lower(table_comment) like lower(?)", []interface{}{"%" + req.TableComment + "%"})
		}

		if req.BeginTime != "" {
			sql += gdb.FormatSqlWithArgs(" and date_format(create_time,'%y%m%d') >= date_format(?,'%y%m%d') ", []interface{}{req.BeginTime})
		}

		if req.EndTime != "" {
			sql += gdb.FormatSqlWithArgs(" and date_format(create_time,'%y%m%d') <= date_format(?,'%y%m%d') ", []interface{}{req.EndTime})
		}
	}
	countSql := "select count(1) " + sql
	res.Total, err = db.GetCount(ctx, countSql)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("读取总表数失败")
		return
	}
	sql = "table_name, table_comment, create_time, update_time " + sql

	if req.PageNum == 0 {
		req.PageNum = 1
	}

	if req.PageSize == 0 {
		req.PageSize = systemConsts.PageSize
	}
	page := (req.PageNum - 1) * req.PageSize
	sql += " order by create_time desc,table_name asc limit  " + gconv.String(page) + "," + gconv.String(req.PageSize)
	err = db.GetScan(ctx, &res.List, "select "+sql)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("读取数据失败")
	}
	return
}

//获取数据库驱动类型
func (s *sysGenTableImpl) getDbDriver() string {
	config := g.DB().GetConfig()
	return gstr.ToLower(config.Type)
}

// SelectDbTableListByNames 查询数据库中对应的表数据
func (s *sysGenTableImpl) SelectDbTableListByNames(ctx context.Context, tableNames []string) ([]*entity.SysGenTable, error) {
	if s.getDbDriver() != "mysql" {
		return nil, gerror.New("代码生成只支持mysql数据库")
	}
	db := g.DB()
	sql := "select * from information_schema.tables where table_name NOT LIKE 'qrtz_%' and table_name NOT LIKE 'gen_%' " +
		" and table_schema = (select database()) "
	if len(tableNames) > 0 {
		in := gstr.TrimRight(gstr.Repeat("?,", len(tableNames)), ",")
		sql += " and " + gdb.FormatSqlWithArgs("table_name in ("+in+")", gconv.SliceAny(tableNames))
	}
	var result []*entity.SysGenTable
	err := db.GetScan(ctx, &result, sql)
	if err != nil {
		g.Log().Error(ctx, err)
		return nil, gerror.New("获取表格信息失败")
	}
	return result, err
}

// ImportGenTable 导入表结构
func (s *sysGenTableImpl) ImportGenTable(ctx context.Context, tableList []*entity.SysGenTable) error {
	if tableList != nil {
		tx, err := g.DB().Begin(ctx)
		if err != nil {
			return err
		}
		for _, table := range tableList {
			tableName := table.TableName
			s.InitTable(ctx, table)
			result, err := tx.Model(dao.SysGenTable.Table()).Insert(table)
			if err != nil {
				g.Log().Error(ctx, err)
				return err
			}

			tmpId, err := result.LastInsertId()

			if err != nil || tmpId <= 0 {
				g.Log().Error(ctx, err)
				tx.Rollback()
				return gerror.New("保存数据失败")
			}

			table.TableId = tmpId

			// 保存列信息
			genTableColumns, err := GenTableColumn().SelectDbTableColumnsByName(ctx, tableName)

			if err != nil || len(genTableColumns) <= 0 {
				g.Log().Error(ctx, err)
				tx.Rollback()
				return gerror.New("获取列数据失败")
			}
			for _, column := range genTableColumns {
				GenTableColumn().InitColumnField(column, table)
				_, err = tx.Model(dao.SysGenTableColumn.Table()).Insert(column)
				if err != nil {
					g.Log().Error(ctx, err)
					tx.Rollback()
					return gerror.New("保存列数据失败")
				}
			}
		}
		return tx.Commit()
	} else {
		return gerror.New("参数错误")
	}
}

// InitTable 初始化表信息
func (s *sysGenTableImpl) InitTable(ctx context.Context, table *entity.SysGenTable) {
	table.ClassName = s.ConvertClassName(ctx, table.TableName)
	table.PackageName = g.Cfg().MustGet(ctx, "gen.packageName").String()
	table.ModuleName = g.Cfg().MustGet(ctx, "gen.moduleName").String()
	table.BusinessName = s.GetBusinessName(ctx, table.TableName)
	table.FunctionName = strings.ReplaceAll(table.TableComment, "表", "")
	table.FunctionAuthor = g.Cfg().MustGet(ctx, "gen.author").String()
	table.TplCategory = "crud"
	table.CreateTime = gtime.Now()
	table.UpdateTime = table.CreateTime
}

// ConvertClassName 表名转换成类名
func (s *sysGenTableImpl) ConvertClassName(ctx context.Context, tableName string) string {
	return gstr.CaseCamel(s.removeTablePrefix(ctx, tableName))
}

// GetBusinessName 获取业务名
func (s *sysGenTableImpl) GetBusinessName(ctx context.Context, tableName string) string {
	return s.removeTablePrefix(ctx, tableName)
}

//删除表前缀
func (s *sysGenTableImpl) removeTablePrefix(ctx context.Context, tableName string) string {
	autoRemovePre := g.Cfg().MustGet(ctx, "gen.autoRemovePre").Bool()
	tablePrefix := g.Cfg().MustGet(ctx, "gen.tablePrefix").String()
	if autoRemovePre && tablePrefix != "" {
		searchList := strings.Split(tablePrefix, ",")
		for _, str := range searchList {
			if strings.HasPrefix(tableName, str) {
				tableName = strings.Replace(tableName, str, "", 1) //注意，只替换一次
			}
		}
	}
	return tableName
}

// Delete 删除表信息
func (s *sysGenTableImpl) Delete(ctx context.Context, ids []int64) error {
	g.Log().Printf(ctx, "delet ids:%v", ids)
	tx, err := g.DB().Begin(ctx)
	if err != nil {
		g.Log().Error(ctx, err)
		return gerror.New("开启删除事务出错")
	}
	_, err = tx.Model(dao.SysGenTable.Table()).Where(dao.SysGenTable.Columns().TableId+" in(?)", ids).Delete()
	if err != nil {
		g.Log().Error(ctx, err)
		tx.Rollback()
		return gerror.New("删除表格数据失败")
	}
	_, err = tx.Model(dao.SysGenTableColumn.Table()).Where(dao.SysGenTableColumn.Columns().TableId+" in(?)", ids).Delete()
	if err != nil {
		g.Log().Error(ctx, err)
		tx.Rollback()
		return gerror.New("删除表格字段数据失败")
	}
	tx.Commit()
	return nil
}

// GetTableInfoByTableId 获取表格信息
func (s *sysGenTableImpl) GetTableInfoByTableId(ctx context.Context, tableId int64) (info *entity.SysGenTable, err error) {
	err = dao.SysGenTable.Ctx(ctx).WherePri(tableId).Scan(&info)
	if err != nil {
		g.Log().Error(ctx, err)
		err = gerror.New("获取表格信息出错")
	}
	return
}

// SaveEdit 更新表及字段生成信息
func (s *sysGenTableImpl) SaveEdit(ctx context.Context, req *system.GenTableEditReq) (err error) {
	if req == nil {
		err = gerror.New("参数错误")
		return
	}
	var table *entity.SysGenTable
	err = dao.SysGenTable.Ctx(ctx).Where("table_id=?", req.TableId).Scan(&table)
	if err != nil || table == nil {
		err = gerror.New("数据不存在")
		return
	}
	if req.TableName != "" {
		table.TableName = req.TableName
	}
	if req.TableComment != "" {
		table.TableComment = req.TableComment
	}
	if req.BusinessName != "" {
		table.BusinessName = req.BusinessName
	}
	if req.ClassName != "" {
		table.ClassName = req.ClassName
	}
	if req.FunctionAuthor != "" {
		table.FunctionAuthor = req.FunctionAuthor
	}
	if req.FunctionName != "" {
		table.FunctionName = req.FunctionName
	}
	if req.ModuleName != "" {
		table.ModuleName = req.ModuleName
	}
	if req.PackageName != "" {
		table.PackageName = req.PackageName
	}
	if req.Remark != "" {
		table.Remark = req.Remark
	}
	if req.TplCategory != "" {
		table.TplCategory = req.TplCategory
	}
	if req.Params != "" {
		table.Options = req.Params
	}
	table.UpdateTime = gtime.Now()
	var options g.Map
	if req.TplCategory == "tree" {
		//树表设置options
		options = g.Map{
			"treeCode":       req.TreeCode,
			"treeParentCode": req.TreeParentCode,
			"treeName":       req.TreeName,
		}
		table.Options = gconv.String(options)
	} else {
		table.Options = ""
	}

	var tx *gdb.TX
	tx, err = g.DB().Begin(ctx)
	if err != nil {
		return
	}
	_, err = tx.Model(dao.SysGenTable.Table()).Save(table)
	if err != nil {
		tx.Rollback()
		return err
	}

	//保存列数据
	if req.Columns != nil {
		for _, column := range req.Columns {
			if column.ColumnId > 0 {
				var dbColumn *entity.SysGenTableColumn
				err = dao.SysGenTableColumn.Ctx(ctx).Where("column_id=?", column.ColumnId).Scan(&dbColumn)
				if dbColumn != nil {
					dbColumn.ColumnComment = column.ColumnComment
					dbColumn.GoType = column.GoType
					dbColumn.HtmlType = column.HtmlType
					dbColumn.HtmlField = column.HtmlField
					dbColumn.QueryType = column.QueryType
					dbColumn.GoField = column.GoField
					dbColumn.DictType = column.DictType
					dbColumn.IsInsert = column.IsInsert
					dbColumn.IsEdit = column.IsEdit
					dbColumn.IsList = column.IsList
					dbColumn.IsQuery = column.IsQuery
					dbColumn.IsRequired = column.IsRequired
					if tc, e := options["treeParentCode"]; options != nil && e && tc != "" && tc == dbColumn.HtmlField {
						dbColumn.IsQuery = 0
						dbColumn.IsList = 0
						dbColumn.HtmlType = "select"
					}
					//获取字段关联表信息
					if column.LinkLabelName != "" {
						dbColumn.LinkTableName = column.LinkTableName
						dbColumn.LinkLabelId = column.LinkLabelId
						dbColumn.LinkLabelName = column.LinkLabelName
						var linkTable *entity.SysGenTable
						err = dao.SysGenTable.Ctx(ctx).Where("table_name =?", column.LinkTableName).Scan(&linkTable)
						if err != nil {
							tx.Rollback()
							return
						}
						dbColumn.LinkTableClass = linkTable.ClassName
						dbColumn.LinkTablePackage = linkTable.PackageName
					} else {
						dbColumn.LinkTableName = ""
						dbColumn.LinkTableClass = ""
						dbColumn.LinkTablePackage = ""
						dbColumn.LinkLabelId = ""
						dbColumn.LinkLabelName = ""
					}
					_, err = tx.Model(dao.SysGenTableColumn.Table).Save(dbColumn)
					if err != nil {
						tx.Rollback()
						return
					}
				}
			}
		}
	}
	tx.Commit()
	return
}

func (s *sysGenTableImpl) SelectRecordById(ctx context.Context, tableId int64) (entityExtend *model.SysGenTableEntityExtend, err error) {
	var table *entity.SysGenTable
	table, err = s.GetTableInfoByTableId(ctx, tableId)
	if err != nil {
		return
	}
	m := gconv.Map(table)
	gconv.Struct(m, &entityExtend)
	if entityExtend.TplCategory == "tree" {
		opt := gjson.New(entityExtend.Options)
		entityExtend.TreeParentCode = opt.Get("treeParentCode").String()
		entityExtend.TreeCode = opt.Get("treeCode").String()
		entityExtend.TreeName = opt.Get("treeName").String()
	}
	//表字段数据
	var columns []*entity.SysGenTableColumn
	columns, err = GenTableColumn().SelectGenTableColumnListByTableId(ctx, tableId)
	if err != nil {
		return
	}
	entityExtend.Columns = columns
	return
}

func (s *sysGenTableImpl) GenCode(ctx context.Context, ids []int64) (err error) {
	//获取当前运行时目录
	curDir, err := os.Getwd()
	if err != nil {
		return gerror.New("获取本地路径失败")
	}
	frontDir := g.Cfg().MustGet(ctx, "gen.frontDir").String()
	goApiDir := g.Cfg().MustGet(ctx, "gen.goApiPath").String()

	if !gfile.IsDir(frontDir) {
		err = gerror.New("项目前端路径不存在，请检查是否已在配置文件中配置！")
		return
	}

	for _, id := range ids {
		var genData g.MapStrStr
		var extendData *model.SysGenTableEntityExtend
		genData, extendData, err = s.GenData(ctx, id)
		liberr.ErrIsNil(ctx, err, "生成代码失败")
		packageName := gstr.SubStr(extendData.PackageName, gstr.Pos(extendData.PackageName, "/"))
		businessName := gstr.CaseCamelLower(extendData.BusinessName)
		for key, code := range genData {
			path := ""
			//g.Log().Printf(ctx, "curDir:%s, packageName:%s", curDir, packageName)
			switch key {
			case "goApi":
				path := strings.Join([]string{curDir, goApiDir, "/" + extendData.ModuleName + "/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "controller":
				path = strings.Join([]string{curDir, packageName, "/controller/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "dao":
				path = strings.Join([]string{curDir, packageName, "/dao/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "dao_internal":
				path = strings.Join([]string{curDir, packageName, "/dao/internal/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, true)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "model_do":
				path = strings.Join([]string{curDir, packageName, "/model/do/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, true)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "model_entity":
				path = strings.Join([]string{curDir, packageName, "/model/entity/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, true)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "router":
				path = strings.Join([]string{curDir, packageName, "/router/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "service":
				path = strings.Join([]string{curDir, packageName, "/service/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "sql":
				path = strings.Join([]string{curDir, "/data/gen_sql/", packageName, "/", extendData.TableName, ".sql"}, "")
				hasSql := gfile.Exists(path)
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
				if !hasSql {
					//第一次生成则向数据库写入菜单数据
					//err = s.writeDb(ctx, path)
					//if err != nil {
					//	return
					//}
					//清除菜单缓存
					//comService.Cache().Remove(ctx, systemConsts.CacheSysAuthMenu)
				}

			case "vue":
				path = strings.Join([]string{frontDir, "/src/views/", extendData.ModuleName, "/", businessName, "/index.vue"}, "")
				if gstr.ContainsI(extendData.PackageName, "plugins") {
					path = strings.Join([]string{frontDir, "/src/views/plugins/", extendData.ModuleName, "/", businessName, "/index.vue"}, "")
				}
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)

			case "jsApi":
				path = strings.Join([]string{frontDir, "/src/api/", extendData.ModuleName, "/", businessName, ".ts"}, "")
				if gstr.ContainsI(extendData.PackageName, "plugins") {
					path = strings.Join([]string{frontDir, "/src/api/plugins/", extendData.ModuleName, "/", businessName, ".ts"}, "")
				}
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			}
			g.Log().Printf(ctx, "curDir:%s, packageName:%s, key:%s, path:%s", curDir, packageName, key, path)

		}
		//生成对应的模块路由
		err = s.genModuleRouter(curDir, extendData.ModuleName, extendData.PackageName)
		liberr.ErrIsNil(ctx, err, "生成模块路由失败")
	}
	return
}

//下载生成的代码
func (s *sysGenTableImpl) BatchGenCode(ctx context.Context, tableIds []int64, r *ghttp.Request) (err error) {

	if len(tableIds) < 1 {
		liberr.ErrIsNil(ctx, err, "请选择要生成的表")
		err = gerror.New("请选择要生成的表")
		return err
	}

	dataFilePath := g.Cfg().MustGet(ctx, "gen.tmpDir").String()

	var extendData *model.SysGenTableEntityExtend
	var genCode g.MapStrStr

	//生成文件
	for _, id := range tableIds {
		genCode, extendData, err = s.GenData(ctx, id)
		if err != nil {
			liberr.ErrIsNil(ctx, err, "生成代码失败")
			err = gerror.New("生成代码失败")
			return err
		}

		packageName := gstr.SubStr(extendData.PackageName, gstr.Pos(extendData.PackageName, "/"))
		businessName := gstr.CaseCamelLower(extendData.BusinessName)

		for key, code := range genCode {
			switch key {
			case "goApi":
				path := strings.Join([]string{dataFilePath, packageName, "/api/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "controller":
				path := strings.Join([]string{dataFilePath, packageName, "/control/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "dao":
				path := strings.Join([]string{dataFilePath, packageName, "/dao/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "dao_internal":
				path := strings.Join([]string{dataFilePath, packageName, "/dao/internal/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, true)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "model_do":
				path := strings.Join([]string{dataFilePath, packageName, "/model/do/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, true)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "model_entity":
				path := strings.Join([]string{dataFilePath, packageName, "/model/entity/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, true)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "router":
				path := strings.Join([]string{dataFilePath, packageName, "/router/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "service":
				path := strings.Join([]string{dataFilePath, packageName, "/service/", extendData.TableName, ".go"}, "")
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "sql":
				path := strings.Join([]string{dataFilePath, "/data/gen_sql/", packageName, "/", extendData.TableName, ".sql"}, "")
				hasSql := gfile.Exists(path)
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
				if !hasSql {
					//第一次生成则向数据库写入菜单数据
					//err = s.writeDb(ctx, path)
					//if err != nil {
					//	return
					//}
					//清除菜单缓存
					//comService.Cache().Remove(ctx, systemConsts.CacheSysAuthMenu)
				}

			case "vue":
				path := strings.Join([]string{dataFilePath, "/vue/", extendData.ModuleName, "/", businessName, "/list/index.vue"}, "")
				if gstr.ContainsI(extendData.PackageName, "plugins") {
					path = strings.Join([]string{dataFilePath, "/vue/plugins/", extendData.ModuleName, "/", businessName, "/list/index.vue"}, "")
				}
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			case "jsApi":
				path := strings.Join([]string{dataFilePath, "/vue/api/", extendData.ModuleName, "/", businessName, ".js"}, "")
				if gstr.ContainsI(extendData.PackageName, "plugins") {
					path = strings.Join([]string{dataFilePath, "/vue/api/plugins/", extendData.ModuleName, "/", businessName, ".js"}, "")
				}
				err = s.createFile(path, code, false)
				liberr.ErrIsNil(ctx, err, "创建文件(%s)失败", path)
			}
		}

	}
	//打包
	err = gcompress.ZipPathWriter(dataFilePath+"/gen/", r.Response.Writer)
	if err != nil {
		return err
	}
	//删除生成的文件
	gfile.Remove(dataFilePath + "/gen/")
	//设置下载文件名
	r.Response.Header().Set("Content-Length", gconv.String(r.Response.BufferLength()))
	r.Response.Header().Set("Content-Type", "application/force-download")
	r.Response.Header().Set("Accept-Ranges", "bytes")
	r.Response.Header().Set("Content-Disposition", "attachment; filename=IOTFast.zip")
	r.Response.Buffer()

	return nil
}

// createFile 创建文件
func (s *sysGenTableImpl) createFile(fileName, data string, cover bool) (err error) {

	//g.Log().Printf(ctx, "path:%s, key:%s", path, key)
	fmt.Printf("fileName:%s, cover:%v, Exists:%v \n", fileName, cover, gfile.Exists(fileName))
	if !gfile.Exists(fileName) || cover {
		var f *os.File
		f, err = gfile.Create(fileName)
		if err == nil {
			f.WriteString(data)
		}
		f.Close()
		fmt.Printf("create file fileName:%s status %v \n", fileName, err)
	}
	return
}

// GenData 获取生成数据
func (s *sysGenTableImpl) GenData(ctx context.Context, tableId int64) (data g.MapStrStr, extendData *model.SysGenTableEntityExtend, err error) {
	extendData, err = s.SelectRecordById(ctx, tableId)
	if err != nil {
		return
	}
	if extendData == nil {
		liberr.ErrIsNil(ctx, err, "表格数据不存在")
		err = gerror.New("表格数据不存在")
		return
	}
	GenTableColumn().SetPkColumn(extendData, extendData.Columns)
	view := gview.New()
	view.SetConfigWithMap(g.Map{
		"Paths":      g.Cfg().MustGet(ctx, "gen.templatePath").String(),
		"Delimiters": []string{"{{", "}}"},
	})
	view.BindFuncMap(g.Map{
		"UcFirst": func(str string) string {
			return gstr.UcFirst(str)
		},
		"Sum": func(a, b int) int {
			return a + b
		},
		"CaseCamelLower": gstr.CaseCamelLower, //首字母小写驼峰
		"CaseCamel":      gstr.CaseCamel,      //首字母大写驼峰
		"HasSuffix":      gstr.HasSuffix,      //是否存在后缀
		"ContainsI":      gstr.ContainsI,      //是否包含子字符串
		"CaseSnake":      gstr.CaseSnake,      //​将字符串转换中的符号(下划线,空格,点,中横线)用下划线( ​_​ )替换,并全部转换为小写字母。
		"ToLower":        gstr.ToLower,
		"ToUpper":        gstr.ToUpper,
		"TrimSpecial": func(t string) string {
			var chars []rune
			ok := false
			for _, letter := range t {

				/**
				判断是否为字母： unicode.IsLetter(v)
				判断是否为十进制数字： unicode.IsDigit(v)
				判断是否为数字： unicode.IsNumber(v)
				判断是否为空白符号： unicode.IsSpace(v)
				判断是否为Unicode标点字符 :unicode.IsPunct(v)
				判断是否为中文：unicode.Han(v)
				*/
				if unicode.IsPunct(letter) || unicode.IsSymbol(letter) || unicode.IsSpace(letter) || letter == '(' || letter == ')' || letter == '{' || letter == '}' {
					ok = false
				} else {
					ok = true
				}
				if ok {
					chars = append(chars, letter)
				} else {
					break
				}
			}
			return string(chars)
		},
		"VueTag": func(t string) string {
			return t
		},
	})

	//树形菜单选项
	tplData := g.Map{"table": extendData}
	daoKey := "dao"
	daoValue := ""
	var tmpDao string
	if tmpDao, err = view.Parse(ctx, "go/dao.template", tplData); err == nil {
		daoValue = tmpDao
		daoValue, err = s.trimBreak(daoValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}
	daoInternalKey := "dao_internal"
	daoInternalValue := ""
	var tmpInternalDao string
	if tmpInternalDao, err = view.Parse(ctx, "go/dao_internal.template", tplData); err == nil {
		daoInternalValue = tmpInternalDao
		daoInternalValue, err = s.trimBreak(daoInternalValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}
	modelDoKey := "model_do"
	modelDoValue := ""
	var tmpModelDo string
	if tmpModelDo, err = view.Parse(ctx, "go/model_do.template", tplData); err == nil {
		modelDoValue = tmpModelDo
		modelDoValue, err = s.trimBreak(modelDoValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}
	modelEntityKey := "model_entity"
	modelEntityValue := ""
	var tmpModelEntity string
	if tmpModelEntity, err = view.Parse(ctx, "go/model_entity.template", tplData); err == nil {
		modelEntityValue = tmpModelEntity
		modelEntityValue, err = s.trimBreak(modelEntityValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}
	controllerKey := "controller"
	controllerValue := ""
	var tmpController string
	if tmpController, err = view.Parse(ctx, "go/controller.template", tplData); err == nil {
		controllerValue = tmpController
		controllerValue, err = s.trimBreak(controllerValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}
	//goApi
	goApiKey := "goApi"
	goApiValue := ""
	var tmpgoApi string
	if tmpgoApi, err = view.Parse(ctx, "go/api.template", tplData); err == nil {
		goApiValue = tmpgoApi
		goApiValue, err = s.trimBreak(goApiValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}

	serviceKey := "service"
	serviceValue := ""
	var tmpService string
	if tmpService, err = view.Parse(ctx, "go/service.template", tplData); err == nil {
		serviceValue = tmpService
		serviceValue, err = s.trimBreak(serviceValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}

	// routerKey := "router"
	// routerValue := ""
	// var tmpRouter string
	// if tmpRouter, err = view.Parse(ctx, "go/router.template", tplData); err == nil {
	// 	routerValue = tmpRouter
	// 	routerValue, err = s.trimBreak(routerValue)
	// 	liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	// } else {
	// 	return
	// }

	sqlKey := "sql"
	sqlValue := ""
	var tmpSql string
	if tmpSql, err = view.Parse(ctx, "sql/sql.template", tplData); err == nil {
		sqlValue = tmpSql
		sqlValue, err = s.trimBreak(sqlValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}

	jsApiKey := "jsApi"
	jsApiValue := ""
	var tmpJsApi string
	if tmpJsApi, err = view.Parse(ctx, "js/api.template", tplData); err == nil {
		jsApiValue = tmpJsApi
		jsApiValue, err = s.trimBreak(jsApiValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}

	vueKey := "vue"
	vueValue := ""
	var tmpVue string
	tmpFile := "vue/list-vue.template"
	if extendData.TplCategory == "tree" {
		//树表
		tmpFile = "vue/tree-vue.template"
	}
	if tmpVue, err = view.Parse(ctx, tmpFile, tplData); err == nil {
		vueValue = tmpVue
		vueValue, err = s.trimBreak(vueValue)
		liberr.ErrIsNil(ctx, err, "删除文件多余行失败")
	} else {
		return
	}

	data = g.MapStrStr{
		goApiKey:       goApiValue,
		daoKey:         daoValue,
		daoInternalKey: daoInternalValue,
		modelDoKey:     modelDoValue,
		modelEntityKey: modelEntityValue,
		controllerKey:  controllerValue,
		serviceKey:     serviceValue,
		//routerKey:      routerValue,
		sqlKey:   sqlValue,
		jsApiKey: jsApiValue,
		vueKey:   vueValue,
	}
	return
}

//剔除多余的换行
func (s *sysGenTableImpl) trimBreak(str string) (rStr string, err error) {
	var b []byte
	if b, err = gregex.Replace("(([\\s\t]*)\r?\n){2,}", []byte("$2\n"), []byte(str)); err != nil {
		return
	}
	if b, err = gregex.Replace("(([\\s\t]*)/{4}\r?\n)", []byte("$2\n\n"), b); err == nil {
		rStr = gconv.String(b)
	}
	return
}

// 写入菜单数据
func (s *sysGenTableImpl) writeDb(ctx context.Context, path string) (err error) {
	isAnnotation := false
	var fi *os.File
	fi, err = os.Open(path)
	if err != nil {
		liberr.ErrIsNil(ctx, err, "文件(%s)打开失败", path)
		return
	}
	defer fi.Close()
	br := bufio.NewReader(fi)
	var sqlStr []string
	now := gtime.Now()
	var res sql.Result
	var id int64
	var tx *gdb.TX
	tx, err = g.DB().Begin(ctx)
	if err != nil {
		liberr.ErrIsNil(ctx, err, "事物初始化失败")
		return
	}
	for {
		bytes, e := br.ReadBytes('\n')
		if e == io.EOF {
			break
		}
		str := gstr.Trim(string(bytes))

		if str == "" {
			continue
		}

		if strings.Contains(str, "/*") {
			isAnnotation = true
		}

		if isAnnotation {
			if strings.Contains(str, "*/") {
				isAnnotation = false
			}
			continue
		}

		if str == "" || strings.HasPrefix(str, "--") || strings.HasPrefix(str, "#") {
			continue
		}
		if strings.HasSuffix(str, ";") {
			if gstr.ContainsI(str, "select") {
				if gstr.ContainsI(str, "@now") {
					continue
				}
				if gstr.ContainsI(str, "@parentId") {
					id, err = res.LastInsertId()
					liberr.ErrIsNil(ctx, err, "insert failed")
				}
			}
			sqlStr = append(sqlStr, str)
			sql := strings.Join(sqlStr, "")
			gstr.ReplaceByArray(sql, []string{"@parentId", gconv.String(id), "@now", now.Format("Y-m-d H:i:s")})
			//插入业务
			res, err = tx.Exec(sql)
			if err != nil {
				tx.Rollback()
				return
			}
			sqlStr = nil
		} else {
			sqlStr = []string{str}
		}
	}
	tx.Commit()
	return
}

// GenModuleRouter 生成模块路由
func (s *sysGenTableImpl) genModuleRouter(curDir, moduleName, packageName string) (err error) {
	if gstr.CaseSnake(moduleName) != "system" {
		routerFilePath := strings.Join([]string{curDir, "/router/", gstr.CaseSnake(moduleName), ".go"}, "")
		if gstr.ContainsI(packageName, "plugins") {
			routerFilePath = strings.Join([]string{curDir, "/plugins/router/", gstr.CaseSnake(moduleName), ".go"}, "")
		}
		code := fmt.Sprintf(`package router%simport _ "%s/router"`, "\n", packageName)
		err = s.createFile(routerFilePath, code, false)
	}
	return
}
