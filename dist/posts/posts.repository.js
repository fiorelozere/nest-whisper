"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const uuid_1 = require("uuid");
let PostsRepository = (() => {
    let PostsRepository = class PostsRepository extends typeorm_1.Repository {
        async createPost(createPostDto, user) {
            const { title, photoUrl, content, categoryId, tags, visibleUsername } = createPostDto;
            const uuid = uuid_1.v4();
            const post = new post_entity_1.Post();
            post.uuid = uuid;
            post.title = title;
            post.user = user;
            post.photoUrl = photoUrl;
            post.content = content;
            post.views = 0;
            post.upVotes = 0;
            post.downVotes = 0;
            post.categoryId = categoryId;
            post.tags = tags;
            post.visibleUsername = visibleUsername;
            post.username = null;
            if (post.visibleUsername) {
                post.username = user.username;
            }
            await this.save(post);
            delete post.user;
            return post;
        }
        async updatePost(updatePostDto, id, user) {
            const { title, photoUrl, content, categoryId, tags } = updatePostDto;
            const post = await this.findOne({ where: { username: user.username, id: id } });
            if (title !== null) {
                post.title = title;
            }
            if (photoUrl !== null) {
                post.photoUrl = photoUrl;
            }
            if (content !== null) {
                post.content = content;
            }
            if (categoryId !== null) {
                post.categoryId = categoryId;
            }
            if (tags !== null) {
                post.tags = tags;
            }
            await this.save(post);
            return post;
        }
    };
    PostsRepository = __decorate([
        typeorm_1.EntityRepository(post_entity_1.Post)
    ], PostsRepository);
    return PostsRepository;
})();
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map