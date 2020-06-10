import { Body, Controller, Param, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';
import { CommentsService } from './comments.service';

@Controller('comments')
@UseGuards(AuthGuard())
export class CommentsController {
  constructor(
    private commentsService: CommentsService
  ) {
  }

  @Post('/:id')
  createComment(@Body('commentString') commentString: string, @Param('id') postId: string, @GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.commentsService.createComment(commentString, postId, user);
  }

  @Post('/:id')
  deleteComment(@Param('id') commentId: string, user: User){
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.commentsService.deleteComment(commentId, user);
  }

  @Post('/:id')
  updateComment(@Body('commentString') commentString: string, @Param('id') commentId: string, @GetUser() user: User) {
    if(user.roles !== 'user'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.commentsService.updateComment(commentString, commentId, user);
  }

}
