"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    url: process.env.DATABASE_URL,
    username: process.env.USERNAMEE || dbConfig.username,
    password: process.env.PASSWORD || dbConfig.password,
    host: process.env.HOST || dbConfig.host,
    type: dbConfig.type,
    port: dbConfig.port,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map