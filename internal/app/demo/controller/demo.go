/*
* @desc:demo
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/2 15:24
 */

package controller

import (
	"context"
	"iotfast/api/v1/demo"
)

var Demo = cDemo{}

type cDemo struct {
}

func (c *cDemo) Demo(ctx context.Context, req *demo.DmReq) (res *demo.DmRes, err error) {
	res = &demo.DmRes{Name: "赵四"}
	panic("demo wrong")
	return
}
