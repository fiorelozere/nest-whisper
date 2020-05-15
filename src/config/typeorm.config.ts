import { TypeOrmModule } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Fiorelo03',
  database: 'nest-whisper',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,

}