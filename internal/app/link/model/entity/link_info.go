// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径: iotfast/internal/app/model/entity/link_info.go
// 生成人：dwx
// ==========================================================================

package entity

import "github.com/gogf/gf/v2/os/gtime"

// LinkInfo is the golang structure for table link_info.
type LinkInfo struct {
	Id        int         `orm:"id,primary" json:"id"`        // 主键
	Name      string      `orm:"name" json:"name"`            // 连接名称
	Mark      string      `orm:"mark" json:"mark"`            // 连接标记
	CreatedAt *gtime.Time `orm:"created_at" json:"createdAt"` // 创建时间
	UpdatedAt *gtime.Time `orm:"updated_at" json:"updatedAt"` // 修改时间
}
