/*
* @desc:验证码参数
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/30 23:47
 */

package common

import "github.com/gogf/gf/v2/frame/g"

type CaptchaReq struct {
	g.Meta `path:"/get" tags:"验证码" method:"get" summary:"获取验证码"`
}
type CaptchaRes struct {
	g.Meta `mime:"application/json"`
	Key    string `json:"key"`
	Img    string `json:"img"`
}
