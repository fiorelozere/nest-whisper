import { Repository } from 'typeorm';
import { Comment } from './comments.entity';
import { User } from '../auth/user.entity';
export declare class CommentsRepository extends Repository<Comment> {
    createComment(commentString: string, postId: string, visibleUsername: boolean, user: User): Promise<Comment>;
    updateComment(commentString: string, commentId: string, user: User): Promise<Comment>;
}
