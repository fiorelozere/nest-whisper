import { CategoriesService } from './categories.service';
import { User } from '../auth/user.entity';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(user: User): Promise<import("./category.entity").Category[]>;
    getCategory(id: number, user: User): Promise<import("./category.entity").Category>;
    createCategory(categoryName: string, user: User): Promise<import("./category.entity").Category>;
    updateCategory(id: number, categoryName: string, user: User): Promise<import("./category.entity").Category>;
}
