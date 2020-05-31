import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config'

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModule = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: dbConfig.synchronize,

}