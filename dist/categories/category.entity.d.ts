import { BaseEntity } from 'typeorm';
import { Post } from '../posts/post.entity';
export declare class Category extends BaseEntity {
    id: string;
    uuid: string;
    categoryName: string;
    post: Post[];
}
