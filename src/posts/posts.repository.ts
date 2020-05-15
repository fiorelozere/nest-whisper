import { EntityRepository, Repository } from 'typeorm';
import { Post } from './post.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreatePostDto } from './dto/create-post.dto';

@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { title, photoUrl, content } = createPostDto;
    const uuid = uuidv4();
    const post = new Post();
    post.uuid = uuid;
    post.title = title;
    post.photoUrl = photoUrl;
    post.content = content;
    post.views = 0;
    post.upVotes = 0;
    post.downVotes = 0;
    await this.save(post);
    return post;
  }

  async updatePost(updatePostDto: CreatePostDto, id: string): Promise<Post> {
    const {title, photoUrl, content} = updatePostDto;
    const post = await this.findOne(id);
    if(title !== null) {
      post.title = title;
    }
    if(photoUrl !== null) {
      post.photoUrl = photoUrl;
    }
    if(content !== null) {
      post.content = content;
    }

    await this.save(post);
    return post;

  }
}