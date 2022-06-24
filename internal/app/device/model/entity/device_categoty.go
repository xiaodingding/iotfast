// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-06-21 22:06:16
// 生成路径: iotfast/internal/app/model/entity/device_categoty.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// DeviceCategoty is the golang structure for table device_categoty.
type DeviceCategoty struct {
	Id        int         `orm:"id,primary" json:"id"`        // 主键
	KindId    int         `orm:"kind_id" json:"kindId"`       // 数据模板的主键
	Name      string      `orm:"name" json:"name"`            // 数据名称
	Mark      string      `orm:"mark" json:"mark"`            // 数据标识
	DataType  int         `orm:"data_type" json:"dataType"`   // 数据类型
	Unit      string      `orm:"unit" json:"unit"`            // 数据单位
	Ratio     string      `orm:"ratio" json:"ratio"`          // 变比系数
	Format    string      `orm:"format" json:"format"`        // 格式化显示
	HomeShow  int         `orm:"home_show" json:"homeShow"`   // 首页是否展示
	Remark    string      `orm:"remark" json:"remark"`        // 备注
	CreatedAt *gtime.Time `orm:"created_at" json:"createdAt"` // 创建时间
	UpdatedAt *gtime.Time `orm:"updated_at" json:"updatedAt"` // 修改时间
}
