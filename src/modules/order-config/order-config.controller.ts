import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderConfigService } from './order-config.service';
import { CreateOrderConfigDto } from './dto/create-order-config.dto';
import { UpdateOrderConfigDto } from './dto/update-order-config.dto';

@Controller('order-config')
export class OrderConfigController {
  constructor(private readonly orderConfigService: OrderConfigService) {}

  @Post()
  create(@Body() createOrderConfigDto: CreateOrderConfigDto) {
    return this.orderConfigService.create(createOrderConfigDto);
  }

  @Get()
  findAll() {
    return this.orderConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderConfigService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderConfigDto: UpdateOrderConfigDto) {
    return this.orderConfigService.update(+id, updateOrderConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderConfigService.remove(+id);
  }
}
