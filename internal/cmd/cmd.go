package cmd

import (
	"context"
	"fmt"
	"iotfast/internal/consts"
	router "iotfast/internal/route"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gcmd"

	"github.com/gogf/gf/v2/protocol/goai"
)

const (
	swaggerUIPageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="SwaggerUI"/>
  <title>SwaggerUI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@latest/swagger-ui.css" />
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@latest/swagger-ui-bundle.js" crossorigin></script>
<script>
	window.onload = () => {
		window.ui = SwaggerUIBundle({
			url:    '/api.json',
			dom_id: '#swagger-ui',
		});
	};
</script>
</body>
</html>
`
)

var (
	Main = &gcmd.Command{
		Name:        "main",
		Brief:       "start http server",
		Description: "this is the command entry for starting your process",
	}

	Http = &gcmd.Command{
		Name:        "http",
		Brief:       "start http server",
		Description: "this is the command entry for starting your http server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			fmt.Println("start http server")
			s := g.Server()
			s.Group("/", func(group *ghttp.RouterGroup) {
				router.BindController(group)
				group.GET("/swagger", func(r *ghttp.Request) {
					r.Response.Write(swaggerUIPageContent)
				})
			})
			enhanceOpenAPIDoc(s)
			s.Run()
			return nil
		},
	}
	Mqtt = &gcmd.Command{
		Name:        "mqtt",
		Brief:       "start mqtt server",
		Description: "this is the command entry for starting your mqtt server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			fmt.Println("start mqtt server")
			SetConfigPath("E:/src/iotfast/manifest/config/default_config.yml")
			NewSimpleCmd()
			return
		},
	}
	All = &gcmd.Command{
		Name:        "all",
		Brief:       "start all server",
		Description: "this is the command entry for starting all server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			fmt.Println("start all server")
			go Http.Func(ctx, parser)
			go Mqtt.Func(ctx, parser)
			return
		},
	}
)

func enhanceOpenAPIDoc(s *ghttp.Server) {
	openapi := s.GetOpenApi()
	openapi.Config.CommonResponse = ghttp.DefaultHandlerResponse{}
	openapi.Config.CommonResponseDataField = `Data`

	// API description.
	openapi.Info = goai.Info{
		Title:       consts.OpenAPITitle,
		Description: consts.OpenAPIDescription,
		Contact: &goai.Contact{
			Name: consts.OpenAPIContactName,
			URL:  consts.OpenAPIContactUrl,
		},
	}
}
