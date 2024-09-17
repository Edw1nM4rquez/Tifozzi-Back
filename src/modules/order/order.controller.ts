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
  Query,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  //@UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    createOrderDto.date = new Date();
    return this.orderService.create(createOrderDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll(
    @Query('date_init') dateInit?: string,
    @Query('date_end') dateEnd?: string,
    @Query('q') q?: string,
    @Req() request?: any,
  ) {
    if (!dateInit || !dateEnd) {
      throw new HttpException(
        'Required start and end date',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.orderService.findAll(dateInit, dateEnd, q);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderService.remove(+id);
  // }
}
