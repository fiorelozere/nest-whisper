import { CommentsRepository } from './comments.repository';
import { User } from '../auth/user.entity';
import { Comment } from './comments.entity';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: CommentsRepository);
    createComment(commentString: string, postId: string, user: User): Promise<Comment>;
    deleteComment(commentId: string, user: User): Promise<void>;
    updateComment(commentString: string, commentId: string, user: User): Promise<Comment>;
}
