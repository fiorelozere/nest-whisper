import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CategoriesRepository } from '../categories/categories.repository';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private postsRepository: PostsRepository

  ) {

  }
  async getPosts():Promise<Post[]> {
    const posts = await this.postsRepository.find({});
    return posts;
  }


  async getPost(id: string): Promise<Post> {
    const post = await this.postsRepository.findOne(id);
    if(!post){
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    return post;
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    return this.postsRepository.createPost(createPostDto);
  }

  async updatePost(updatePostDto: UpdatePostDto, id: string): Promise<Post> {
    return this.postsRepository.updatePost(updatePostDto, id);
  }

  async deletePost(id:string):Promise<void> {
    const result = await this.postsRepository.delete(id);
    if(result.affected === 0) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
  }
}
