import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoriesRepository extends Repository<Category> {
    createCategory(categoryName: string): Promise<Category>;
    updateCategory(categoryId: number, categoryName: string): Promise<Category>;
}
