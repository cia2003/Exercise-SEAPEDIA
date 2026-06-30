package controllers

import (
	"backend/models"
	beego "github.com/beego/beego/v2/server/web"
)

type UserGroupController struct {
	beego.Controller
}

// @Title UserGroupEndpoint
// @Description Tests the API
// @Success 200 {object} models.UserGroup
// @Failure 403 body is empty
// @router /UserGroup [get]
func (c *UserGroupController) Get() {
	acc := models.GetSampleUserGroup()
	c.Data["json"] = acc
	c.ServeJSON()
}