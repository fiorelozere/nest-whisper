import { Body, Controller, Get, Post, UnauthorizedException, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthCredentialsSignInDto } from './dto/auth-credentials-signin.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}
    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
   signIn(@Body(ValidationPipe) authCredentialsSignInDto: AuthCredentialsSignInDto) {
    return this.authService.signIn(authCredentialsSignInDto);
    }
    @Post('/signupasadmin')
    @UseGuards(AuthGuard())
    signUpAsAdmin(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto, @GetUser() user: User) {
      if(user.roles !== 'admin'){
        throw new UnauthorizedException('You dont have privileges to access this');
      }
      return this.authService.signUpAsAdmin(authCredentialsDto);
    }

    @Get('/myprofile')
    @UseGuards(AuthGuard())
    myProfile(@GetUser() user: User){
    return this.authService.myProfile(user);
    }

    @Post('/resetpassword')
  @UseGuards(AuthGuard())
  resetPassword(@GetUser() user: User, @Body('password') password: string,@Body('currentPassword') currentPassword: string){
    return this.authService.resetPassword(user, password, currentPassword);
    }

}
