import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from '../auth/user.entity';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<import("./post.entity").Post[]>;
    getUserPosts(user: User): Promise<import("./post.entity").Post[]>;
    getUserPost(id: string, user: User): Promise<import("./post.entity").Post>;
    getPost(id: string): Promise<import("./post.entity").Post>;
    createPost(createPostDto: CreatePostDto, user: User): Promise<import("./post.entity").Post>;
    updatePost(id: string, updatePostDto: UpdatePostDto, user: User): Promise<import("./post.entity").Post>;
    deletePost(id: string, user: User): Promise<void>;
}
