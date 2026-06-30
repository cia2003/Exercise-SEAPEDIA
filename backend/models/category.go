package models

import (
	"gorm.io/gorm"
)

type Category struct {
    gorm.Model

	Name 		string
	Description *string
	slug 		string

	IdParent 	*uint
	Parent 		*Category 	`gorm:"foreignKey:IdParent"`
}


func GetSampleCategory() Category {
	description := "Electronic Products"

    return Category{
		Name: "Electronic", 
		Description: &description, 
		Slug: "electronic",
		IdParent: nil

    }
}