package conf

import (
	"fmt"
	"os"
	"log"

	"backend/models"

    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	user := os.Getenv("db_user")
	pass := os.Getenv("db_password")
	name := os.Getenv("db_name")
	host := os.Getenv("db_host")
	port := os.Getenv("db_port")

    dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
        host, user, pass, name, port)
	
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("failed to connect database:", err)
	}

	DB = db

	// Migrate the schema
	DB.AutoMigrate(
		// &models.Account{},
		&models.Group{},
	)
}