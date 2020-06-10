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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const user_entity_1 = require("../auth/user.entity");
const comments_service_1 = require("./comments.service");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    createComment(commentString, postId, user) {
        return this.commentsService.createComment(commentString, postId, user);
    }
    deleteComment(commentId, user) {
        return this.commentsService.deleteComment(commentId, user);
    }
    updateComment(commentString, commentId, user) {
        return this.commentsService.updateComment(commentString, commentId, user);
    }
};
__decorate([
    common_1.Post('/:id'),
    __param(0, common_1.Body('commentString')), __param(1, common_1.Param('id')), __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "createComment", null);
__decorate([
    common_1.Post('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "deleteComment", null);
__decorate([
    common_1.Post('/:id'),
    __param(0, common_1.Body('commentString')), __param(1, common_1.Param('id')), __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "updateComment", null);
CommentsController = __decorate([
    common_1.Controller('comments'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map