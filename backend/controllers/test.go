package controllers

import (
	"backend/models"
	beego "github.com/beego/beego/v2/server/web"

)

type TestController struct {
	beego.Controller
}

// @Title TestEndpoint
// @Description Tests the API
// @Success 200 {object} models.Test
// @Failure 403 body is empty
// @router /hello [get]
func (t *TestController) Test() {
	Response := models.TestFunction()
	t.Data["json"] = Response
	t.ServeJSON()  
}