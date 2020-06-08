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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_repository_1 = require("./categories.repository");
let CategoriesService = (() => {
    let CategoriesService = class CategoriesService {
        constructor(categoriesRepository) {
            this.categoriesRepository = categoriesRepository;
        }
        async getCategories() {
            const categories = await this.categoriesRepository.find({});
            return categories;
        }
        async getCategory(categoryId) {
            const category = await this.categoriesRepository.findOne(categoryId);
            return category;
        }
        async createCategory(categoryName) {
            return this.categoriesRepository.createCategory(categoryName);
        }
        async updateCategory(categoryId, categoryName) {
            return this.categoriesRepository.updateCategory(categoryId, categoryName);
        }
    };
    CategoriesService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(categories_repository_1.CategoriesRepository)),
        __metadata("design:paramtypes", [categories_repository_1.CategoriesRepository])
    ], CategoriesService);
    return CategoriesService;
})();
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map