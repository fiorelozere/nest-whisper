"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let CategoriesRepository = (() => {
    let CategoriesRepository = class CategoriesRepository extends typeorm_1.Repository {
        async createCategory(categoryName) {
            const category = new category_entity_1.Category();
            category.uuid = uuid_1.v4();
            category.categoryName = categoryName;
            try {
                await this.save(category);
            }
            catch (e) {
                if (e.code === '23505') {
                    throw new common_1.ConflictException('Category already exists');
                }
                else {
                    throw new common_1.InternalServerErrorException();
                }
            }
            return category;
        }
        async updateCategory(categoryId, categoryName) {
            const category = await this.findOne(categoryId);
            if (!category) {
                throw new Error(`Category not found`);
            }
            if (categoryName !== null) {
                category.categoryName = categoryName;
            }
            await this.save(category);
            return category;
        }
    };
    CategoriesRepository = __decorate([
        common_1.Injectable(),
        typeorm_1.EntityRepository(category_entity_1.Category)
    ], CategoriesRepository);
    return CategoriesRepository;
})();
exports.CategoriesRepository = CategoriesRepository;
//# sourceMappingURL=categories.repository.js.map