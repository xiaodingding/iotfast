// ==========================================================================
// 物联网快速开发自动生成model代码，无需手动修改，重新生成会自动覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径: iotfast/internal/app/model/do/link_info.go
// 生成人：dwx
// ==========================================================================


package do
import (
    "github.com/gogf/gf/v2/frame/g"    
    "github.com/gogf/gf/v2/os/gtime"    
)
// LinkInfo is the golang structure for table link_info.
type LinkInfo struct {
    g.Meta         `orm:"table: link_info, do:true"`    
         Id       interface{}        // 主键    
         Name    interface{}           // 连接名称    
         Mark    interface{}           // 连接标记    
         CreatedAt    *gtime.Time           // 创建时间    
         UpdatedAt    *gtime.Time           // 修改时间    
}