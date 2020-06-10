import { BaseEntity } from 'typeorm';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';
import { Comment } from '../comments/comments.entity';
export declare class Post extends BaseEntity {
    id: string;
    uuid: string;
    title: string;
    photoUrl: string;
    content: string;
    views: number;
    upVotes: number;
    downVotes: number;
    createdAt: string;
    category: Category;
    categoryName: string;
    tags: string;
    user: User;
    username: string;
    visibleUsername: boolean;
    comments: Comment[];
    getTime(): string;
}
