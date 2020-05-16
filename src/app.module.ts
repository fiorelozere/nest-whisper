import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PostsModule,
    CategoriesModule
  ]
})
export class AppModule {}
