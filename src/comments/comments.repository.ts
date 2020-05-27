import { EntityRepository, Repository } from 'typeorm';
import { Comment } from './comments.entity';
import { User } from '../auth/user.entity';

@EntityRepository(Comment)
export class CommentsRepository extends Repository<Comment>{

  async createComment(commentString:string, postId: string, user: User): Promise<Comment> {
    const comment = new Comment();
    comment.commentString = commentString;
    comment.upvotes = 0;
    comment.downvotes = 0;
    comment.user = user;
    comment.postId = postId;
    comment.username = user.username;
    await this.save(comment);
    return comment;
  }

  async updateComment(commentString: string, commentId: string, user: User): Promise<Comment> {
    const comment = await this.findOne({where: {username: user.username, id: commentId}});
    comment.commentString = commentString;

    await this.save(comment);
    return comment;
  }

}