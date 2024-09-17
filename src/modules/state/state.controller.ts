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
  Put,
  UseGuards,
} from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  create(@Body() createStateDto: CreateStateDto) {
    try {
      return this.stateService.create(createStateDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll() {
    try {
      return this.stateService.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('active')
  findAllActive() {
    try {
      return this.stateService.findAllActive();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.stateService.findOne(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    try {
      return this.stateService.update(+id, updateStateDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  // @UseGuards(JwtAuthGuard, IsAdminGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.stateService.remove(+id);
  // }
}
