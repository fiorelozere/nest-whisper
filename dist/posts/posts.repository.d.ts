import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../auth/user.entity';
export declare class PostsRepository extends Repository<Post> {
    createPost(createPostDto: CreatePostDto, user: User): Promise<Post>;
    updatePost(updatePostDto: CreatePostDto, id: string, user: User): Promise<Post>;
}
