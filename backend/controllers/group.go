package controllers

import (
	"backend/models"
	beego "github.com/beego/beego/v2/server/web"
)

type GroupController struct {
	beego.Controller
}

// @Title GroupEndpoint
// @Description Tests the API
// @Success 200 {object} models.Group
// @Failure 403 body is empty
// @router /Group [get]
func (c *GroupController) Get() {
	acc := models.GetSampleGroup()
	c.Data["json"] = acc
	c.ServeJSON()
}