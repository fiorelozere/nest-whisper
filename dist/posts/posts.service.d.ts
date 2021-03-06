import { PostsRepository } from './posts.repository';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CategoriesRepository } from '../categories/categories.repository';
import { User } from '../auth/user.entity';
export declare class PostsService {
    private postsRepository;
    private categoriesRepository;
    constructor(postsRepository: PostsRepository, categoriesRepository: CategoriesRepository);
    getPosts(): Promise<Post[]>;
    getUserPosts(user: User): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
    getUserPost(id: string, user: User): Promise<Post>;
    createPost(createPostDto: CreatePostDto, user: User): Promise<Post>;
    updatePost(updatePostDto: UpdatePostDto, id: string, user: User): Promise<Post>;
    deletePost(id: string, user: User): Promise<void>;
}
