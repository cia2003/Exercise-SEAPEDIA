package models

import (
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
)

type Group struct {
    gorm.Model
    Name      	string    `gorm:"column:name"`
}

func GetSampleGroup() Group {
    return Account{
		Name: "Seller"
    }
}