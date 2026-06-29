package models

import (

)

type Account struct {
    IdAccount uint      `gorm:"primaryKey;column:id_account;autoIncrement"`
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