import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { CategoriesRepository } from '../categories/categories.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository, CategoriesRepository]), AuthModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
