import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';

@Injectable()
export class ProductImageService {
  create(createProductImageDto: CreateProductImageDto) {
    return 'This action adds a new productImage';
  }

  findAll() {
    return `This action returns all productImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productImage`;
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return `This action updates a #${id} productImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productImage`;
  }
}
