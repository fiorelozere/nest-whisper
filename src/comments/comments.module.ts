import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsRepository } from './comments.repository';
import { AuthModule } from '../auth/auth.module';
import { PostsRepository } from '../posts/posts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CommentsRepository, PostsRepository]), AuthModule],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
