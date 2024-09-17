import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createCartDto: CreateCartDto) {
    const user = req.user;
    return this.cartService.create(createCartDto, user.id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  findOne(@Req() req) {
    const user = req.user;
    return this.cartService.findOneByUser(user.id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('me')
  update(@Req() req, @Body() updateCartDto: UpdateCartDto) {
    const user = req.user;
    return this.cartService.update(updateCartDto, user.id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('me')
  remove(@Req() req) {
    const user = req.user;
    return this.cartService.remove(user.id);
  }
}
