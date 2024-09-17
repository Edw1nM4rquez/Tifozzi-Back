import { Injectable } from '@nestjs/common';
import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';

@Injectable()
export class ProductPriceService {
  create(createProductPriceDto: CreateProductPriceDto) {
    return 'This action adds a new productPrice';
  }

  findAll() {
    return `This action returns all productPrice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPrice`;
  }

  update(id: number, updateProductPriceDto: UpdateProductPriceDto) {
    return `This action updates a #${id} productPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPrice`;
  }
}
