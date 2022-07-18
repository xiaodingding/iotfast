// ==========================================================================
// 物联网快速开发自动生成dao操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-16 15:59:37
// 生成路径: iotfast/internal/app/link/dao/link_net.go
// 生成人：dwx
// ==========================================================================

package dao

import (
	"github.com/xiaodingding/iotfast/internal/app/link/dao/internal"
	// "github.com/gogf/gf/v2/os/gtime"
)

// internallinkNetDao is internal type for wrapping internal DAO implements.
type internalLinkNetDao = *internal.LinkNetDao

// linkNetDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type linkNetDao struct {
	internalLinkNetDao
}

var (
	// LinkNet is globally public accessible object for table tools_gen_table operations.
	LinkNet = linkNetDao{
		internal.NewLinkNetDao(),
	}
)
