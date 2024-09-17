import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  HttpException,
  HttpStatus,
  Query,
  Req,
  UseFilters,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
import { UniqueConstraintFilterFilter } from 'src/filters/unique-constraint-filter.filter';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  @UseFilters(UniqueConstraintFilterFilter)
  create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productService.create(createProductDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  // @UseGuards(JwtAuthGuard, IsAdminGuard)
  // @Get()
  // search(@Query('q') q?: string, @Query('company') company?: number) {
  //   return this.productService.search(q);
  // }
  //@UseGuards(JwtAuthGuard, IsAdminGuard)

  @Get()
  findAll(
    @Query('q') q?: string,
    @Query('category') category?: string,
    @Query('company') company?: number,
    @Req() request?: any,
  ) {
    //console.log(request.cookies.companyId);
    //console.log("cookies", request?.cookies);
    const companyId = company || request?.cookies?.companyId  || 1;
    return this.productService.findAll(q, category, +companyId);
  }

  // @Get()
  // publicFindAll(@Query('q') q?: string) {
  //   return this.productService.publicFindAll(q);
  // }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get('active')
  findAllActive() {
    try {
      return this.productService.findAllActive();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('slug/:slug')
  findOneBySlug(
    @Param('slug') slug: string,
    //@Query('company') company?: number,
    @Req() request?: any,
  ) {
    const company = request?.cookies?.companyId || 1;
    return this.productService.findOneBySlug(slug, +company);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Query('company') company?: number) {
    return this.productService.findOne(+id, company);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}
