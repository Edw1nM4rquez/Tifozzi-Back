import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { CATEGORY_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: CATEGORY_REPOSITORY,
      useValue: Category,
    },
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
