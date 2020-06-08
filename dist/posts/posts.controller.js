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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../auth/user.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
let PostsController = (() => {
    let PostsController = class PostsController {
        constructor(postsService) {
            this.postsService = postsService;
        }
        getPosts() {
            return this.postsService.getPosts();
        }
        getUserPosts(user) {
            return this.postsService.getUserPosts(user);
        }
        getUserPost(id, user) {
            return this.postsService.getUserPost(id, user);
        }
        getPost(id) {
            return this.postsService.getPost(id);
        }
        createPost(createPostDto, user) {
            return this.postsService.createPost(createPostDto, user);
        }
        updatePost(id, updatePostDto, user) {
            return this.postsService.updatePost(updatePostDto, id, user);
        }
        deletePost(id, user) {
            return this.postsService.deletePost(id, user);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getPosts", null);
    __decorate([
        common_1.Get('myposts'),
        __param(0, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getUserPosts", null);
    __decorate([
        common_1.Get('/myposts/:id'),
        __param(0, common_1.Param('id')), __param(1, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getUserPost", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getPost", null);
    __decorate([
        common_1.Post(),
        common_1.UsePipes(common_1.ValidationPipe),
        __param(0, common_1.Body()), __param(1, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "createPost", null);
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('uuid')), __param(1, common_1.Body(common_1.ValidationPipe)), __param(2, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "updatePost", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')), __param(1, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "deletePost", null);
    PostsController = __decorate([
        common_1.Controller('posts'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], PostsController);
    return PostsController;
})();
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map