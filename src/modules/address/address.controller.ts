import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  Put,
  Req,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
import { IsClientGuard } from 'src/core/guards/is-client.guard';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get('/user/:id')
  findAllByUser(@Param('id') id: string) {
    try {
      return this.addressService.findAllByUser(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put('/user/:id')
  updateByUser(
    @Param('id') id: string,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    try {
      return this.addressService.updateByUser(+id, createAddressDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Delete('/user/:id')
  deleteByUser(@Param('id') id: string) {
    try {
      return this.addressService.deleteByUser(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsClientGuard)
  @Post('/me')
  createMe(@Req() req, @Body() createAddressDto: CreateAddressDto) {
    createAddressDto.userId = req.user.id;
    return this.addressService.create(createAddressDto);
  }

  @UseGuards(JwtAuthGuard, IsClientGuard)
  @Get('/me')
  findAllByMe(@Req() req) {
    try {
      return this.addressService.findAllByUser(+req.user.id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsClientGuard)
  @Put('/me/:id')
  updateByMe(
    @Req() req,
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    try {
      updateAddressDto.userId = req.user.id;
      return this.addressService.updateByUser(+id, updateAddressDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsClientGuard)
  @Delete('/me/:id')
  deleteByMe(@Req() req, @Param('id') id: string) {
    try {
      return this.addressService.deleteByUserLoged(+id, +req.user.id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }
}
