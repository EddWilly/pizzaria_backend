"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const portString = process.env.DATABASE_PORT;
let portNumber = (typeof (portString) === 'string' ? +portString : null);
exports.dataSource = new typeorm_1.DataSource({
    type: "mariadb",
    host: process.env.DATABASE_HOST,
    port: (typeof (portNumber) === 'number' ? portNumber : 3306),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "pizzaria",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: []
});
