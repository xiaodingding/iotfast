package main

import (
	_ "github.com/xiaodingding/iotfast/internal/packed"

	"github.com/gogf/gf/v2/os/gctx"

	"github.com/xiaodingding/iotfast/internal/cmd"
)

func main() {
	// cmd.Main.Run(gctx.New())

	err := cmd.Main.AddCommand(cmd.Http)
	if err != nil {
		panic(err)
	}
	cmd.Main.Run(gctx.New())

}
