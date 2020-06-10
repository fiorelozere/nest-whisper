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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const posts_repository_1 = require("./posts.repository");
const categories_repository_1 = require("../categories/categories.repository");
let PostsService = class PostsService {
    constructor(postsRepository, categoriesRepository) {
        this.postsRepository = postsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getPosts() {
        const posts = await this.postsRepository.find({});
        posts.forEach(post => {
            if (!post.visibleUsername) {
                delete post.username;
            }
            delete post.visibleUsername;
            delete post.user;
        });
        return posts;
    }
    async getUserPosts(user) {
        const posts = await this.postsRepository.find({ where: { username: user.username } });
        posts.forEach(post => {
            if (!post.visibleUsername) {
                delete post.username;
            }
            delete post.visibleUsername;
            delete post.user;
        });
        return posts;
    }
    async getPost(id) {
        const post = await this.postsRepository.findOne(id);
        if (!post) {
            throw new common_1.NotFoundException(`Post with id: ${id} not found`);
        }
        if (!post.visibleUsername) {
            delete post.username;
        }
        delete post.visibleUsername;
        delete post.user;
        return post;
    }
    async getUserPost(id, user) {
        const post = await this.postsRepository.findOne({ where: { username: user.username, id: id } });
        if (!post) {
            throw new common_1.NotFoundException(`Post with id: ${id} not found`);
        }
        if (!post.visibleUsername) {
            delete post.username;
        }
        delete post.visibleUsername;
        delete post.user;
        return post;
    }
    async createPost(createPostDto, user) {
        const { categoryName } = createPostDto;
        const category = await this.categoriesRepository.findOne({ categoryName: categoryName.toLowerCase() });
        if (!category) {
            throw new common_1.NotFoundException(`Category with name ${categoryName} not found`);
        }
        return this.postsRepository.createPost(createPostDto, user, category);
    }
    async updatePost(updatePostDto, id, user) {
        return this.postsRepository.updatePost(updatePostDto, id, user);
    }
    async deletePost(id, user) {
        const result = await this.postsRepository.delete({ username: user.username, id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Post with id: ${id} not found`);
        }
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(posts_repository_1.PostsRepository)),
    __param(1, typeorm_1.InjectRepository(categories_repository_1.CategoriesRepository)),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository,
        categories_repository_1.CategoriesRepository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map