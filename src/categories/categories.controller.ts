import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('categories')
@UseGuards(AuthGuard())
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService
  ) {}

  @Get()
  getCategories(@GetUser()user : User) {
    if(user.roles !== 'admin'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('uuid')id: number, @GetUser()user : User) {
    if(user.roles !== 'admin'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.categoriesService.getCategory(id);
  }

  @Post()
  createCategory(@Body('categoryName', ValidationPipe) categoryName: string, @GetUser() user: User) {
    if(user.roles !== 'admin'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.categoriesService.createCategory(categoryName);
  }

  @Patch('/:id')
  updateCategory(@Param('id') id: number, @Body('categoryName', ValidationPipe) categoryName: string, @GetUser()user: User) {
    if(user.roles !== 'admin'){
      throw new UnauthorizedException('You dont have privileges to access this');
    }
    return this.categoriesService.updateCategory(id, categoryName);
  }
}
