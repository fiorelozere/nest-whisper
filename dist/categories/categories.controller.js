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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const user_entity_1 = require("../auth/user.entity");
let CategoriesController = (() => {
    let CategoriesController = class CategoriesController {
        constructor(categoriesService) {
            this.categoriesService = categoriesService;
        }
        getCategories(user) {
            return this.categoriesService.getCategories();
        }
        getCategory(id, user) {
            return this.categoriesService.getCategory(id);
        }
        createCategory(categoryName, user) {
            if (user.roles !== 'admin') {
                throw new common_1.UnauthorizedException('You dont have privileges to access this');
            }
            return this.categoriesService.createCategory(categoryName);
        }
        updateCategory(id, categoryName, user) {
            if (user.roles !== 'admin') {
                throw new common_1.UnauthorizedException('You dont have privileges to access this');
            }
            return this.categoriesService.updateCategory(id, categoryName);
        }
    };
    __decorate([
        common_1.Get(),
        __param(0, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "getCategories", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('uuid')), __param(1, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "getCategory", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body('categoryName', common_1.ValidationPipe)), __param(1, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "createCategory", null);
    __decorate([
        common_1.Patch('/:id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body('categoryName', common_1.ValidationPipe)), __param(2, get_user_decorator_1.GetUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "updateCategory", null);
    CategoriesController = __decorate([
        common_1.Controller('categories'),
        common_1.UseGuards(passport_1.AuthGuard()),
        __metadata("design:paramtypes", [categories_service_1.CategoriesService])
    ], CategoriesController);
    return CategoriesController;
})();
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map