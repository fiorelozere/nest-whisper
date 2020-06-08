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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const post_entity_1 = require("../posts/post.entity");
const comments_entity_1 = require("../comments/comments.entity");
let User = (() => {
    let User = class User extends typeorm_1.BaseEntity {
        async validatePassword(password) {
            const hash = await bcrypt.hash(password, this.salt);
            return hash === this.password;
        }
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "roles", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "profilePhotoUrl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "salt", void 0);
    __decorate([
        typeorm_1.OneToMany(type => post_entity_1.Post, post => post.user, { eager: true }),
        __metadata("design:type", Array)
    ], User.prototype, "posts", void 0);
    __decorate([
        typeorm_1.OneToMany(type => comments_entity_1.Comment, comment => comment.user, { eager: true }),
        __metadata("design:type", Array)
    ], User.prototype, "comments", void 0);
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['username'])
    ], User);
    return User;
})();
exports.User = User;
//# sourceMappingURL=user.entity.js.map