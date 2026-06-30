package models

import (
	"gorm.io/gorm"
)

type Account struct {
    gorm.Model
    Type      string    `gorm:"column:type"`
    Balance   float64   `gorm:"column:balance"`

	// Foreign key

}

func GetSampleAccount() Account {
    return Account{
        Type: "Savings", 
        Balance: 1000,
    }
}