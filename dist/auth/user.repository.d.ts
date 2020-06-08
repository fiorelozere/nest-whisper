import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthCredentialsSignInDto } from './dto/auth-credentials-signin.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signUpAsAdmin(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    validateUserPassword(authCredentialsSignInDto: AuthCredentialsSignInDto): Promise<string>;
    resetPassword(user: User, password: string, currentPassword: string): Promise<void>;
    private hashPassword;
}
