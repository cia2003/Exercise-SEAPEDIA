package main

import (
	_ "backend/conf"
	_ "backend/routers"

	beego "github.com/beego/beego/v2/server/web"
)

func main() {
	beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	beego.Run()
}
