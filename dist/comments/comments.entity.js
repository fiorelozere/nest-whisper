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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("../posts/post.entity");
const user_entity_1 = require("../auth/user.entity");
let Comment = (() => {
    let Comment = class Comment {
        constructor() {
            this.createdAt = this.getTime();
        }
        getTime() {
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return date + ' ' + time;
        }
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Comment.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "commentString", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Comment.prototype, "upvotes", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Comment.prototype, "downvotes", void 0);
    __decorate([
        typeorm_1.ManyToOne(type => post_entity_1.Post, post => post.comments, { eager: false }),
        __metadata("design:type", post_entity_1.Post)
    ], Comment.prototype, "post", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "postId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(type => user_entity_1.User, user => user.comments, { eager: false }),
        __metadata("design:type", user_entity_1.User)
    ], Comment.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "username", void 0);
    Comment = __decorate([
        typeorm_1.Entity()
    ], Comment);
    return Comment;
})();
exports.Comment = Comment;
//# sourceMappingURL=comments.entity.js.map