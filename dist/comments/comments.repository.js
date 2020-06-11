"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
const common_1 = require("@nestjs/common");
let CommentsRepository = class CommentsRepository extends typeorm_1.Repository {
    async createComment(commentString, postId, visibleUsername, user) {
        const comment = new comments_entity_1.Comment();
        comment.commentString = commentString;
        comment.upvotes = 0;
        comment.downvotes = 0;
        comment.user = user;
        comment.postId = postId;
        comment.username = user.username;
        comment.visibleUsername = visibleUsername;
        await this.save(comment);
        if (!visibleUsername) {
            delete (comment.username);
        }
        delete (comment.visibleUsername);
        delete (comment.user);
        return comment;
    }
    async updateComment(commentString, commentId, user) {
        const comment = await this.findOne({ where: { username: user.username, id: commentId } });
        if (!comment) {
            throw new common_1.NotFoundException(`Post with id: ${commentId} not found`);
        }
        comment.commentString = commentString;
        await this.save(comment);
        if (!comment.visibleUsername) {
            delete (comment.username);
        }
        delete (comment.visibleUsername);
        delete (comment.user);
        return comment;
    }
};
CommentsRepository = __decorate([
    typeorm_1.EntityRepository(comments_entity_1.Comment)
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map