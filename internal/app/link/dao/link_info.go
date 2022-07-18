// ==========================================================================
// 物联网快速开发自动生成dao操作代码，无需手动修改，重新生成不会自动覆盖.
// 生成日期：2022-07-16 15:38:13
// 生成路径: iotfast/internal/app/link/dao/link_info.go
// 生成人：dwx
// ==========================================================================

package dao

import (
	"github.com/xiaodingding/iotfast/internal/app/link/dao/internal"
	// "github.com/gogf/gf/v2/os/gtime"
)

// internallinkInfoDao is internal type for wrapping internal DAO implements.
type internalLinkInfoDao = *internal.LinkInfoDao

// linkInfoDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type linkInfoDao struct {
	internalLinkInfoDao
}

var (
	// LinkInfo is globally public accessible object for table tools_gen_table operations.
	LinkInfo = linkInfoDao{
		internal.NewLinkInfoDao(),
	}
)
