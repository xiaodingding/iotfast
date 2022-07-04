/*
* @desc:验证码获取
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/2 17:45
 */

package common

import (
	"context"
	"iotfast/api/v1/common"
	"iotfast/internal/app/common/service"
)

var Captcha = captchaController{}

type captchaController struct {
}

// Get 获取验证码
func (c *captchaController) Get(ctx context.Context, req *common.CaptchaReq) (res *common.CaptchaRes, err error) {
	var (
		idKeyC, base64stringC string
	)
	idKeyC, base64stringC, err = service.Captcha().GetVerifyImgString(ctx)
	res = &common.CaptchaRes{
		Key: idKeyC,
		Img: base64stringC,
	}
	return
}
