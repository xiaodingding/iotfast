/*
* @desc:部门model
* @url:www.ddsiot.cn
* @Author: dwx<dwxdyx@qq.com>
* @Date:   2022/4/11 9:07
* @Ref: 参考于https://gitee.com/tiger1103/gfast/
 */

package model

import "github.com/xiaodingding/iotfast/internal/app/system/model/entity"

type SysDeptTreeRes struct {
	*entity.SysDept
	Children []*SysDeptTreeRes `json:"children"`
}
