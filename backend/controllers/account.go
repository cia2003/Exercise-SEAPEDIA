package controllers

import (
	"backend/models"
	beego "github.com/beego/beego/v2/server/web"
)

type AccountController struct {
	beego.Controller
}

// @Title AccountEndpoint
// @Description Tests the API
// @Success 200 {object} models.Account
// @Failure 403 body is empty
// @router /account [get]
func (c *AccountController) Get() {
	acc := models.GetSampleAccount()
	c.Data["json"] = acc
	c.ServeJSON()
}