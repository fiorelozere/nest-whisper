import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config'

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModule = {
  url: process.env.DATABASE_URL,
  type: dbConfig.type,
  port: dbConfig.port,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: dbConfig.synchronize,

}