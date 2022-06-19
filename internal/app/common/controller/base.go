/*
* @desc:
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/3/4 18:19
 */

package controller

import (
	"github.com/gogf/gf/v2/net/ghttp"
)

type BaseController struct {
	Request *ghttp.Request
}

// Init 自动执行的初始化方法
func (c *BaseController) Init(r *ghttp.Request) {
	c.Request = r
}
