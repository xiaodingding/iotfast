package main

import (
	_ "iotfast/internal/packed"

	"github.com/gogf/gf/v2/os/gctx"

	"iotfast/internal/cmd"
)

func main() {
	// cmd.Main.Run(gctx.New())

	err := cmd.Main.AddCommand(cmd.Plugin)
	if err != nil {
		panic(err)
	}
	cmd.Main.Run(gctx.New())

}
