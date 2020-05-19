import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {
  }
  @Get()
  getPosts(){
    return this.postsService.getPosts();
  }


  @Get(':id')
  getPost(@Param('uuid') id:string){
    return this.postsService.getPost(id);
  }
  @Post()
  createPost(@Body(ValidationPipe) createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Patch(':id')
  updatePost(@Param('uuid') id: string, @Body(ValidationPipe) updatePostDto: UpdatePostDto) {
    return this.postsService.updatePost(updatePostDto, id);
  }
  @Delete(':id')
  deletePost(@Param('uuid') id: string) {
    return this.postsService.deletePost(id);
  }
}
