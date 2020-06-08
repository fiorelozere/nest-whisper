import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config'

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModule = {
  url: "postgres://cztchxjkhblssf:05a4deb2d624c7c5b5b85b2b7b9615154cedd5489d25d1f94c3bef6ed4c9cc2d@ec2-54-247-78-30.eu-west-1.compute.amazonaws.com:5432/d95367h4ee1q2n",
  type: dbConfig.type,
  port: dbConfig.port,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: dbConfig.synchronize,

}