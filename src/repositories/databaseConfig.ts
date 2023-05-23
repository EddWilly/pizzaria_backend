import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { User } from './models/User'

import {CreateDatabaseAndTables1684811759572 as createDatabase} from './1684811759572-createDatabaseAndTables'

dotenv.config()

const portString = process.env.DATABASE_PORT
let portNumber: number | null = (typeof(portString) === 'string' ? +portString : null)

export const dataSource = new DataSource({
	type: "mariadb",
	host: process.env.DATABASE_HOST,
	port: (typeof(portNumber) === 'number' ? portNumber : 3306),
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: "migrations",
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [createDatabase],
	subscribers: []
})