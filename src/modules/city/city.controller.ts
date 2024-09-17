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
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    try {
      return this.cityService.create(createCityDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll() {
    try {
      return this.cityService.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('active')
  findAllActive() {
    try {
      return this.cityService.findAllActive();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('state/:id')
  findAllByState(@Param('id') id: string) {
    try {
      return this.cityService.findAllByState(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.cityService.findOne(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    try {
      return this.cityService.update(+id, updateCityDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }
  // @UseGuards(JwtAuthGuard, IsAdminGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cityService.remove(+id);
  // }
}
