import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { v4 as uuidv4 } from 'uuid';
import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler';

@Injectable()
@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {
    async createCategory(categoryName: string) : Promise<Category> {
      const category = new Category();
      category.uuid = uuidv4();
      category.categoryName = categoryName;
      try {
        await this.save(category);
      } catch (e) {
        if(e.code === '23505') {
          throw new ConflictException('Category already exists');
        } else {
          throw new InternalServerErrorException();
        }
      }
      return category;
    }

    async updateCategory(categoryId: number, categoryName: string): Promise<Category> {
      const category = await this.findOne(categoryId);
      if(!category){
        throw new Error(`Category not found`);
      }
      if(categoryName !== null) {
        category.categoryName = categoryName;
      }
      await this.save(category);
      return category;
    }
}