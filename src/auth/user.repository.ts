import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';


@EntityRepository(User)
export class UserRepository extends Repository<User>{

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {username, password} = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await this.hashPassword(password, salt);
    const user = new User();
    user.username = username;
    user.password = hashedPassword;
    user.salt = salt;
  try {
    await this.save(user);
  }catch (e) {
    if(e.code === '23505') {
      throw new ConflictException('Username already exists');
    } else {
      throw new InternalServerErrorException();
    }
  }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto){
    const {username, password} = authCredentialsDto;
    const user = await this.findOne({username});
    if(user && await user.validatePassword(password)){
      return user.username;
    } else {
      return null;
    }
  }

  private async  hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}