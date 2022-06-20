/*
* @desc:公共接口相关
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/30 9:28
 */

package common

// PageReq 公共请求参数
type PageReq struct {
	DateRange []string `p:"dateRange"` //日期范围
	PageNum   int      `p:"pageNum"`   //当前页码
	PageSize  int      `p:"pageSize"`  //每页数
	OrderBy   string   //排序方式
}

// ListRes 列表公共返回
type ListRes struct {
	CurrentPage int `json:"currentPage"`
	Total       int `json:"total"`
}
