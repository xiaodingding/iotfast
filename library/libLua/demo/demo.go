package main

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/xiaodingding/iotfast/library/libLua"
)

func test_sum(ctx context.Context, args ...interface{}) (interface{}, error) {
	sum := 0
	for _, arg := range args {
		sum = sum + int(arg.(int64))
	}
	if sum%2 == 0 {
		return sum, nil
	} else {
		return nil, fmt.Errorf("bad sum")
	}
}

func json_decode(ctx context.Context, args ...interface{}) (interface{}, error) {
	raw := args[0].(string)

	var res map[string]interface{}
	err := json.Unmarshal([]byte(raw), &res)
	return res, err
}

func main() {

	fmt.Println("start main")

	libLua.RegisterExternMethod("json_decode", json_decode)
	libLua.RegisterExternMethod("test_sum", test_sum)

	s := time.Now()

	fmt.Println("time:", s)

	res, err := libLua.NewAction().WithScript(`
	function fib(n)
		if n == 0 then
			return 0
		elseif n == 1 then
			return 1
		end
		return fib(n-1) + fib(n-2)
	end
	`).WithEntrypoint("fib").AddParam(35).Execute(context.Background())
	fmt.Println(time.Now().Sub(s))
	fmt.Println(res, err)

	s = time.Now()
	res, err = libLua.NewAction().WithScriptPath("./script.lua").WithEntrypoint("fib").AddParam(35).Execute(context.Background())
	fmt.Println(time.Now().Sub(s))
	fmt.Println(res, err)

	s = time.Now()
	res, err = libLua.NewAction().WithScriptPath("./script.lua").WithEntrypoint("fibt").AddParam(35).Execute(context.Background())
	fmt.Println(time.Now().Sub(s))
	fmt.Println(res, err)

	s = time.Now()
	res, err = libLua.NewAction().WithScriptPath("./script.lua").WithEntrypoint("test_args").AddParam([]interface{}{69, 56}).Execute(context.Background())
	fmt.Println(time.Now().Sub(s))
	fmt.Println(res, err)

	s = time.Now()
	res, err = libLua.NewAction().WithScriptPath("./script.lua").WithEntrypoint("async_json_encode").Execute(context.Background())
	fmt.Println(time.Now().Sub(s))
	fmt.Println(res, err)

	s = time.Now()
	res, err = libLua.NewAction().WithScriptPath("./script.lua").WithEntrypoint("test_pull_table").AddParam(69).Execute(context.Background())
	fmt.Println(time.Now().Sub(s))
	fmt.Println(res, err)

	fmt.Println("end main")
}
