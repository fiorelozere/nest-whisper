import { EntityRepository, Repository } from 'typeorm';
import { Post } from './post.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../auth/user.entity';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from '../categories/categories.repository';
import { Category } from '../categories/category.entity';


@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {


  async createPost(createPostDto: CreatePostDto, user: User, category: Category): Promise<Post> {
    const {title, photoUrl, content, tags, visibleUsername} = createPostDto;
    const uuid = uuidv4();
    const post = new Post();
    post.uuid = uuid;
    post.title = title;
    post.user = user;
    post.photoUrl = photoUrl;
    post.content = content;
    post.views = 0;
    post.upVotes = 0;
    post.downVotes = 0;
    post.category = category;
    post.categoryName = post.category.categoryName;
    post.tags = tags.toLowerCase();
    post.visibleUsername = visibleUsername;
    post.username = user.username;

    await this.save(post);
    if(!post.visibleUsername){
      delete post.username;
    }
    delete post.category;
    delete post.visibleUsername;
    delete post.user;
    return post;
  }

  async updatePost(updatePostDto: CreatePostDto, id: string, user: User): Promise<Post> {
    const {title, photoUrl, content, tags} = updatePostDto;
    const post = await this.findOne({where: {username: user.username, id: id}});
    if(!post) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    if(title !== null) {
      post.title = title;
    }
    if(photoUrl !== null) {
      post.photoUrl = photoUrl;
    }
    if(content !== null) {
      post.content = content;
    }
    if(tags !== null) {
      post.tags = tags;
    }
    if(!post.visibleUsername){
      delete post.username;
    }
    delete post.visibleUsername;
    delete post.user;
    await this.save(post);
    return post;

  }
}