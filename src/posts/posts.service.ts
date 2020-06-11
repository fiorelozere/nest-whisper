import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CategoriesRepository } from '../categories/categories.repository';
import { User } from '../auth/user.entity';
import { Category } from '../categories/category.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private postsRepository: PostsRepository,
    @InjectRepository(CategoriesRepository)
  private categoriesRepository: CategoriesRepository
  ) {

  }
  async getPosts():Promise<Post[]> {
    const posts = await this.postsRepository.find({});
    posts.forEach(post =>{
      if(!post.visibleUsername){
        delete post.username;
      }
      post.comments.forEach(comment => {
        if (!comment.visibleUsername){
          delete(comment.username);
        }
        delete(comment.visibleUsername);
      })
      delete post.visibleUsername;
      delete post.user;
    })
    return posts;
  }

  async getUserPosts(user: User): Promise<Post[]> {
    const posts = await this.postsRepository.find({where: {username: user.username}});
    posts.forEach(post =>{
      if(!post.visibleUsername){
        delete post.username;
      }
      delete post.visibleUsername;
      delete post.user;
    })
    return posts;
  }

  async getPost(id: string): Promise<Post> {
    const post = await this.postsRepository.findOne(id);
    if(!post){
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    if(!post.visibleUsername){
      delete post.username;
    }
    post.comments.forEach(comment => {
      if (!comment.visibleUsername){
        delete(comment.username);
      }
      delete(comment.visibleUsername);
    })
    delete post.visibleUsername;
    delete post.user;
    return post;
  }

  async getUserPost(id: string, user: User):Promise<Post> {
    const post = await this.postsRepository.findOne({where: {username: user.username, id: id}});
    if(!post) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    if(!post.visibleUsername){
      delete post.username;
    }
    post.comments.forEach(comment => {
      if (!comment.visibleUsername){
        delete(comment.username);
      }
      delete(comment.visibleUsername);
    })
    delete post.visibleUsername;
    delete post.user;
    return post;
  }

  async createPost(createPostDto: CreatePostDto, user: User): Promise<Post> {
    const { categoryName } = createPostDto;
    const category = await this.categoriesRepository.findOne({categoryName: categoryName.toLowerCase()});
    if(!category) {
      throw new NotFoundException(`Category with name ${categoryName} not found`);
    }

    return this.postsRepository.createPost(createPostDto, user, category);
  }

  async updatePost(updatePostDto: UpdatePostDto, id: string, user: User): Promise<Post> {
    return this.postsRepository.updatePost(updatePostDto, id, user);
  }

  async deletePost(id:string, user: User):Promise<void> {
    const result = await this.postsRepository.delete( {username: user.username, id: id});
    if(result.affected === 0) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
  }
}
