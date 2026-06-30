package models

import (

)

type UserGroup struct {
	IdGroup 	uint	
	Group 		Group 	`gorm:"foreignKey:IdGroup;references:ID"`
}