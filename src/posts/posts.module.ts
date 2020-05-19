import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { CategoriesRepository } from '../categories/categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository, CategoriesRepository])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
