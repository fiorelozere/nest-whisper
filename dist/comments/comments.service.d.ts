import { CommentsRepository } from './comments.repository';
import { User } from '../auth/user.entity';
import { Comment } from './comments.entity';
import { PostsRepository } from '../posts/posts.repository';
export declare class CommentsService {
    private commentsRepository;
    private postsRepository;
    constructor(commentsRepository: CommentsRepository, postsRepository: PostsRepository);
    createComment(commentString: string, postId: string, visibleUsername: boolean, user: User): Promise<Comment>;
    deleteComment(commentId: string, user: User): Promise<void>;
    updateComment(commentString: string, commentId: string, user: User): Promise<Comment>;
}
