package libUtils

import (
	"context"
	"fmt"
	"net"

	"github.com/gogf/gf/encoding/gjson"
	"github.com/gogf/gf/v2/encoding/gcharset"
	"github.com/gogf/gf/v2/frame/g"
)

// GetLocalIP 服务端ip
func GetLocalIP() (ip string, err error) {
	var addrs []net.Addr
	addrs, err = net.InterfaceAddrs()
	if err != nil {
		return
	}
	for _, addr := range addrs {
		ipAddr, ok := addr.(*net.IPNet)
		if !ok {
			continue
		}
		if ipAddr.IP.IsLoopback() {
			continue
		}
		if !ipAddr.IP.IsGlobalUnicast() {
			continue
		}
		return ipAddr.IP.String(), nil
	}
	return
}

// GetCityByIp 获取ip所属城市
func GetCityByIp(ip string) string {
	if ip == "" {
		return ""
	}
	if ip == "[::1]" || ip == "127.0.0.1" {
		return "内网IP"
	}
	url := "http://whois.pconline.com.cn/ipJson.jsp?json=true&ip=" + ip
	bytes := g.Client().GetBytes(context.TODO(), url)
	src := string(bytes)
	srcCharset := "GBK"
	tmp, _ := gcharset.ToUTF8(srcCharset, src)
	json, err := gjson.DecodeToJson(tmp)
	if err != nil {
		return ""
	}
	if json.GetInt("code")== 0 {
		city := fmt.Sprintf("%s %s", json.GetString("pro"), json.GetString("city"))
		return city
	} else {
		return ""
	}
}
