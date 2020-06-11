import { Post } from '../posts/post.entity';
import { User } from '../auth/user.entity';
export declare class Comment {
    id: string;
    commentString: string;
    upvotes: number;
    downvotes: number;
    post: Post;
    postId: string;
    createdAt: string;
    user: User;
    username: string;
    visibleUsername: boolean;
    getTime(): string;
}
