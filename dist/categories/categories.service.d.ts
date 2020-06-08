import { CategoriesRepository } from './categories.repository';
import { Category } from './category.entity';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    getCategories(): Promise<Category[]>;
    getCategory(categoryId: number): Promise<Category>;
    createCategory(categoryName: string): Promise<Category>;
    updateCategory(categoryId: number, categoryName: string): Promise<Category>;
}
