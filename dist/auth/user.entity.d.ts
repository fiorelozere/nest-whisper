import { BaseEntity } from 'typeorm';
import { Post } from '../posts/post.entity';
import { Comment } from '../comments/comments.entity';
export declare class User extends BaseEntity {
    id: string;
    roles: 'user' | 'admin';
    username: string;
    profilePhotoUrl: string;
    email: string;
    password: string;
    salt: string;
    posts: Post[];
    comments: Comment[];
    validatePassword(password: string): Promise<boolean>;
}
