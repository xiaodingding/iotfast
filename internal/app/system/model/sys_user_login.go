/*
* @desc:登录日志
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/8 11:43
* @Ref: 参考于https://gitee.com/tiger1103/gfast/
 */

package model

// LoginLogParams 登录日志写入参数
type LoginLogParams struct {
	Status    int
	Username  string
	Ip        string
	UserAgent string
	Msg       string
	Module    string
}
