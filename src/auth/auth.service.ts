import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { AuthCredentialsSignInDto } from './dto/auth-credentials-signin.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsSignInDto: AuthCredentialsSignInDto):Promise<{accessToken: string}> {
    const username = await this.userRepository.validateUserPassword(authCredentialsSignInDto);
    if(!username) {
      throw new UnauthorizedException('Invalid username or password');
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }

  async signUpAsAdmin(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUpAsAdmin(authCredentialsDto);
  }

  async myProfile(user: User): Promise<User> {
    delete(user.roles);
    delete(user.password);
    delete(user.salt);
    delete(user.posts);
    delete(user.comments);
    return user;
  }

  async resetPassword(user: User, password: string, currentPassword: string): Promise<void> {
    return this.userRepository.resetPassword(user, password, currentPassword);
  }
}
