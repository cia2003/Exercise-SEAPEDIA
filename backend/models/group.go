package models

import (
	"gorm.io/gorm"
)

type Group struct {
    gorm.Model
    Name      	string    `gorm:"column:name"`
}

func GetSampleGroup() Group {
    return Group{
		Name: "Seller",
    }
}