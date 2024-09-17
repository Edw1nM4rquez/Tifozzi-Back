import { Injectable } from '@nestjs/common';
import { CreateOrderConfigDto } from './dto/create-order-config.dto';
import { UpdateOrderConfigDto } from './dto/update-order-config.dto';

@Injectable()
export class OrderConfigService {
  create(createOrderConfigDto: CreateOrderConfigDto) {
    return 'This action adds a new orderConfig';
  }

  findAll() {
    return `This action returns all orderConfig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderConfig`;
  }

  update(id: number, updateOrderConfigDto: UpdateOrderConfigDto) {
    return `This action updates a #${id} orderConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderConfig`;
  }
}
