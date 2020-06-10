import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../auth/user.entity';
import { Category } from '../categories/category.entity';
export declare class PostsRepository extends Repository<Post> {
    createPost(createPostDto: CreatePostDto, user: User, category: Category): Promise<Post>;
    updatePost(updatePostDto: CreatePostDto, id: string, user: User): Promise<Post>;
}
