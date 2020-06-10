import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsSignInDto } from './dto/auth-credentials-signin.dto';


@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, email, password, profilePhotoUrl } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await this.hashPassword(password, salt);
    const user = new User();
    user.username = username.toLowerCase();
    user.email = email.toLowerCase();
    user.profilePhotoUrl = profilePhotoUrl;
    user.password = hashedPassword;
    user.salt = salt;
    user.roles = 'user';
    try {
      await this.save(user);
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signUpAsAdmin(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, email, password, profilePhotoUrl } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await this.hashPassword(password, salt);
    const user = new User();
    user.username = username;
    user.email = email;
    user.profilePhotoUrl = profilePhotoUrl;
    user.password = hashedPassword;
    user.salt = salt;
    user.roles = 'admin';
    try {
      await this.save(user);
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(authCredentialsSignInDto: AuthCredentialsSignInDto) {
    const { username, password } = authCredentialsSignInDto;
    const user = await this.findOne({ username });
    if (user && await user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
    }
  }

  async resetPassword(user: User, password: string, currentPassword: string): Promise<void> {
    if(user.password !== await this.hashPassword(currentPassword, user.salt)){
      throw new UnauthorizedException('Current password does not match');
    }
    user.password = await this.hashPassword(password, user.salt);
    await this.save(user);
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}