/*
* @desc:context-model
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/16 14:45
* @Ref: 参考于https://gitee.com/tiger1103/gfast/
 */

package model

type Context struct {
	User *ContextUser // User in context.
}

type ContextUser struct {
	*LoginUserRes
}
