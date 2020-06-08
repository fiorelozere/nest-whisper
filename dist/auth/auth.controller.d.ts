import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthCredentialsSignInDto } from './dto/auth-credentials-signin.dto';
import { User } from './user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsSignInDto: AuthCredentialsSignInDto): Promise<{
        accessToken: string;
    }>;
    signUpAsAdmin(authCredentialsDto: AuthCredentialsDto, user: User): Promise<void>;
    myProfile(user: User): Promise<User>;
    resetPassword(user: User, password: string, currentPassword: string): Promise<void>;
}
