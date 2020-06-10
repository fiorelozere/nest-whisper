"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(authCredentialsDto) {
        const { username, email, password, profilePhotoUrl } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await this.hashPassword(password, salt);
        const user = new user_entity_1.User();
        user.username = username.toLowerCase();
        user.email = email.toLowerCase();
        user.profilePhotoUrl = profilePhotoUrl;
        user.password = hashedPassword;
        user.salt = salt;
        user.roles = 'user';
        try {
            await this.save(user);
        }
        catch (e) {
            if (e.code === '23505') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async signUpAsAdmin(authCredentialsDto) {
        const { username, email, password, profilePhotoUrl } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await this.hashPassword(password, salt);
        const user = new user_entity_1.User();
        user.username = username;
        user.email = email;
        user.profilePhotoUrl = profilePhotoUrl;
        user.password = hashedPassword;
        user.salt = salt;
        user.roles = 'admin';
        try {
            await this.save(user);
        }
        catch (e) {
            if (e.code === '23505') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async validateUserPassword(authCredentialsSignInDto) {
        const { username, password } = authCredentialsSignInDto;
        const user = await this.findOne({ username: username.toLowerCase() });
        if (user && await user.validatePassword(password)) {
            return user.username;
        }
        else {
            return null;
        }
    }
    async resetPassword(user, password, currentPassword) {
        if (user.password !== await this.hashPassword(currentPassword, user.salt)) {
            throw new common_1.UnauthorizedException('Current password does not match');
        }
        user.password = await this.hashPassword(password, user.salt);
        await this.save(user);
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map