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
exports.Post = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../categories/category.entity");
const user_entity_1 = require("../auth/user.entity");
const comments_entity_1 = require("../comments/comments.entity");
let Post = class Post extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
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
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "photoUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Post.prototype, "views", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Post.prototype, "upVotes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Post.prototype, "downVotes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.post, { eager: false, nullable: false }),
    __metadata("design:type", category_entity_1.Category)
], Post.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Post.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "tags", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.posts, { eager: false }),
    __metadata("design:type", user_entity_1.User)
], Post.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Post.prototype, "visibleUsername", void 0);
__decorate([
    typeorm_1.OneToMany(type => comments_entity_1.Comment, comment => comment.post, { eager: true }),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
Post = __decorate([
    typeorm_1.Entity()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map