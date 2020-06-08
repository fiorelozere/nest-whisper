import { User } from '../auth/user.entity';
import { CommentsService } from './comments.service';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    createComment(commentString: string, postId: string, user: User): Promise<import("./comments.entity").Comment>;
    deleteComment(commentId: string, user: User): Promise<void>;
    updateComment(commentString: string, commentId: string, user: User): Promise<import("./comments.entity").Comment>;
}
