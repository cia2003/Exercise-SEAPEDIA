package routers

import (
	"backend/controllers"
	beego "github.com/beego/beego/v2/server/web"
)

// func init() {
//     beego.Router("/", &controllers.MainController{})
// }

func init() {
	ns := beego.NewNamespace("/v1",
		beego.NSNamespace("/test",
			beego.NSInclude(
				&controllers.TestController{},
			),
		),
		beego.NSNamespace("/account",
			beego.NSInclude(
				&controllers.AccountController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
