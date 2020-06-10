import { BaseEntity } from 'typeorm';
import { Post } from '../posts/post.entity';
export declare class Category extends BaseEntity {
    id: number;
    uuid: string;
    categoryName: string;
    post: Post[];
}
