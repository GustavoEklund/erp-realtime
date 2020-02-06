const dotenv = require('dotenv').config()

const dbConfig = {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
		underscored: true,
	},
} // database

module.exports = dbConfig
