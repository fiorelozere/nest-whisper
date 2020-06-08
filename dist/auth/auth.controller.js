"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_credentials_dto_1 = require("./dto/auth-credentials.dto");
const auth_credentials_signin_dto_1 = require("./dto/auth-credentials-signin.dto");
const get_user_decorator_1 = require("./get-user.decorator");
const user_entity_1 = require("./user.entity");
const passport_1 = require("@nestjs/passport");
let AuthController = (() => {
    let AuthController = class AuthController {
        constructor(authService) {
            this.authService = authService;
        }
        signUp(authCredentialsDto) {
            return this.authService.signUp(authCredentialsDto);
        }
        signIn(authCredentialsSignInDto) {
            return this.authService.signIn(authCredentialsSignInDto);
        }
        signUpAsAdmin(authCredentialsDto, user) {
            if (user.roles !== 'admin') {
                throw new common_1.UnauthorizedException('You dont have privileges to access this');
            }
            return this.authService.signUpAsAdmin(authCredentialsDto);
        }
        myProfile(user) {
            return this.authService.myProfile(user);
        }
        resetPassword(user, password, currentPassword) {
            return this.authService.resetPassword(user, password, currentPassword);
        }
    };
    __decorate([
        common_1.Post('/signup'),
        __param(0, common_1.Body(common_1.ValidationPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "signUp", null);
    __decorate([
        common_1.Post('/signin'),
        __param(0, common_1.Body(common_1.ValidationPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [auth_credentials_signin_dto_1.AuthCredentialsSignInDto]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "signIn", null);
    __decorate([
        common_1.Post('/signupasadmin'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __param(0, common_1.Body(common_1.ValidationPipe)), __param(1, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "signUpAsAdmin", null);
    __decorate([
        common_1.Get('/myprofile'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __param(0, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "myProfile", null);
    __decorate([
        common_1.Post('/resetpassword'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Body('password')), __param(2, common_1.Body('currentPassword')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.User, String, String]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "resetPassword", null);
    AuthController = __decorate([
        common_1.Controller('auth'),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
})();
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map