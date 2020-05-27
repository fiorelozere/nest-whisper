import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsRepository } from './comments.repository';
import { User } from '../auth/user.entity';
import { Comment } from './comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsRepository)
    private commentsRepository: CommentsRepository
  ) {}

  async createComment(commentString: string, postId: string, user: User):Promise<Comment> {
    return this.commentsRepository.createComment(commentString, postId, user);
  }

  async deleteComment(commentId: string, user: User): Promise<void> {
    const result = await this.commentsRepository.delete({id: commentId, username: user.username});
      if(result.affected === 0) {
        throw new NotFoundException(`Post with id: ${commentId} not found`);
    }
  }

  async updateComment(commentString: string, commentId: string, user: User):Promise<Comment> {
    return this.commentsRepository.updateComment(commentString, commentId, user);
  }
}
