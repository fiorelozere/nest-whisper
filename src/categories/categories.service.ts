import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
  ) {
  }

  async getCategories():Promise<Category[]> {
    const categories = await this.categoriesRepository.find({});
    return categories;
  }

  async getCategory(categoryId: number): Promise<Category> {
    const category = await this.categoriesRepository.findOne(categoryId);
    return category;
  }

  async createCategory(categoryName: string): Promise<Category> {
    return this.categoriesRepository.createCategory(categoryName);
  }

  async updateCategory(categoryId: number, categoryName: string): Promise<Category>{
    return this.categoriesRepository.updateCategory(categoryId, categoryName);
  }




}
