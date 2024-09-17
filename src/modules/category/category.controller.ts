import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  UseGuards,
  Query,
  Req,
  UseFilters,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
import { UniqueConstraintFilterFilter } from 'src/filters/unique-constraint-filter.filter';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  @UseFilters(UniqueConstraintFilterFilter)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll(@Query('q') q?: string) {
    return this.categoryService.findAll(q);
  }

  @Get('with-products')
  findAllWithProducts(@Query('q') q?: string, @Req() request?: any) {
    const company = request?.cookies?.companyId || 1;
    return this.categoryService.findAllWithProducts(q, +company);
  }

  @Get('active')
  findAllActive(@Query('q') q?: string) {
    try {
      return this.categoryService.findAllActive(q);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
