import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('posts')
@UseGuards(AuthGuard())
export class PostsController {
  constructor(private postsService: PostsService) {
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Get('myposts')
  getUserPosts(@GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.postsService.getUserPosts(user);
  }

  @Get('/myposts/:id')
  getUserPost(@Param('id') id: string, @GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.postsService.getUserPost(id, user);
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postsService.getPost(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto, @GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.postsService.createPost(createPostDto, user);
  }

  @Patch(':id')
  updatePost(@Param('uuid') id: string, @Body(ValidationPipe) updatePostDto: UpdatePostDto, @GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.postsService.updatePost(updatePostDto, id , user);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string, @GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.postsService.deletePost(id,user);
  }
}
