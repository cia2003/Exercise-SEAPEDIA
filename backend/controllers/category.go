package controllers

import (
	"backend/models"
	beego "github.com/beego/beego/v2/server/web"
)

type CategoryController struct {
	beego.Controller
}

// @Title CategoryEndpoint
// @Description Tests the API
// @Success 200 {object} models.Category
// @Failure 403 body is empty
// @router /Category [get]
func (c *CategoryController) Get() {
	acc := models.GetSampleCategory()
	c.Data["json"] = acc
	c.ServeJSON()
}