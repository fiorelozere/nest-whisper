import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsSignInDto } from './dto/auth-credentials-signin.dto';
import { User } from './user.entity';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsSignInDto: AuthCredentialsSignInDto): Promise<{
        accessToken: string;
    }>;
    signUpAsAdmin(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    myProfile(user: User): Promise<User>;
    resetPassword(user: User, password: string, currentPassword: string): Promise<void>;
}
