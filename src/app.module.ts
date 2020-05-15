import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PostsModule
  ]
})
export class AppModule {}
