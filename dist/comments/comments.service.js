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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comments_repository_1 = require("./comments.repository");
const posts_repository_1 = require("../posts/posts.repository");
let CommentsService = class CommentsService {
    constructor(commentsRepository, postsRepository) {
        this.commentsRepository = commentsRepository;
        this.postsRepository = postsRepository;
    }
    async createComment(commentString, postId, visibleUsername, user) {
        if (!await this.postsRepository.findOne({ id: postId })) {
            throw new common_1.NotFoundException(`Post with id: ${postId} not found`);
        }
        return this.commentsRepository.createComment(commentString, postId, visibleUsername, user);
    }
    async deleteComment(commentId, user) {
        const result = await this.commentsRepository.delete({ id: commentId, username: user.username });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Post with id: ${commentId} not found`);
        }
    }
    async updateComment(commentString, commentId, user) {
        return this.commentsRepository.updateComment(commentString, commentId, user);
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comments_repository_1.CommentsRepository)),
    __param(1, typeorm_1.InjectRepository(posts_repository_1.PostsRepository)),
    __metadata("design:paramtypes", [comments_repository_1.CommentsRepository,
        posts_repository_1.PostsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map