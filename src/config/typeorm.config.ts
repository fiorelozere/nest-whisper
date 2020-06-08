import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config'

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModule = {
  url: process.env.DATABASE_URL,
  username: process.env.USERNAMEE || dbConfig.username,
  password: process.env.PASSWORD || dbConfig.password,
  host: process.env.HOST || dbConfig.host,
  type: dbConfig.type,
  port: dbConfig.port,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,

}