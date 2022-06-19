package service

import (
	"context"
	"iotfast/internal/app/system/dao"
	"iotfast/internal/app/system/model/entity"
	"iotfast/library/liberr"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
)

//数据库字符串类型
var COLUMNTYPE_STR = []string{"char", "varchar", "narchar", "varchar2", "tinytext", "text", "mediumtext", "longtext"}

//数据库时间类型
var COLUMNTYPE_TIME = []string{"datetime", "time", "date", "timestamp"}

//数据库数字类型
var COLUMNTYPE_NUMBER = []string{"tinyint", "smallint", "mediumint", "int", "number", "integer", "bigint", "float", "float", "double", "decimal"}

//页面不需要编辑字段
var COLUMNNAME_NOT_EDIT = []string{"id", "create_by", "create_time", "del_flag", "update_by", "update_time"}

//页面不需要显示的列表字段
var COLUMNNAME_NOT_LIST = []string{"id", "create_by", "create_time", "del_flag", "update_by", "update_time"}

//页面不需要查询字段
var COLUMNNAME_NOT_QUERY = []string{"id", "create_by", "create_time", "del_flag", "update_by", "update_time", "remark"}

//根据表名称查询列信息
func SelectDbTableColumnsByName(ctx context.Context, tableName string) ([]*entity.GenTableColumn, error) {
	db := g.DB()
	var entity []*entity.GenTableColumn
	sql := " select column_name, (case when (is_nullable = 'no' && column_key != 'PRI') then '1' else null end) as is_required, " +
		"(case when column_key = 'PRI' then '1' else '0' end) as is_pk, ordinal_position as sort, column_comment," +
		" (case when extra = 'auto_increment' then '1' else '0' end) as is_increment, column_type from information_schema.columns" +
		" where table_schema = (select database()) "
	sql += " and " + gdb.FormatSqlWithArgs(" table_name=? ", []interface{}{tableName}) + " order by ordinal_position ASC "
	result, err := db.GetAll(ctx, sql)
	if err != nil {
		liberr.ErrIsNil(ctx, err)
		return nil, gerror.New("查询列信息失败")
	}
	err = result.Structs(&entity)
	if err != nil {
		return nil, err
	}
	return entity, nil
}

//判断是否是数据库字符串类型
func IsStringObject(value string) bool {
	return IsExistInArray(value, COLUMNTYPE_STR)
}

//判断是否是数据库时间类型
func IsTimeObject(value string) bool {
	return IsExistInArray(value, COLUMNTYPE_TIME)
}

//判断是否是数据库数字类型
func IsNumberObject(value string) bool {
	return IsExistInArray(value, COLUMNTYPE_NUMBER)
}

//页面不需要编辑字段
func IsNotEdit(value string) bool {
	return !IsExistInArray(value, COLUMNNAME_NOT_EDIT)
}

//页面不需要显示的列表字段
func IsNotList(value string) bool {
	return !IsExistInArray(value, COLUMNNAME_NOT_LIST)
}

//页面不需要查询字段
func IsNotQuery(value string) bool {
	return !IsExistInArray(value, COLUMNNAME_NOT_QUERY)
}

//判断string 是否存在在数组中
func IsExistInArray(value string, array []string) bool {
	for _, v := range array {
		if v == value {
			return true
		}
	}
	return false
}

//查询业务字段列表
//查询业务字段列表
func SelectGenTableColumnListByTableId(ctx context.Context, tableId int) ([]*entity.GenTableColumn, error) {
	var list []*entity.GenTableColumn
	result, err := dao.GenTableColumn.Ctx(ctx).Where(dao.GenTableColumn.Columns().TableId, tableId).Order(dao.GenTableColumn.Columns().Sort + " asc, " + dao.GenTableColumn.Columns().ColumnId + " asc").All()
	if err != nil {
		liberr.ErrIsNil(ctx, err, "获取字段信息出错")
		return nil, gerror.New("获取字段信息出错")
	}
	err = result.Structs(&list)
	return list, err
}
