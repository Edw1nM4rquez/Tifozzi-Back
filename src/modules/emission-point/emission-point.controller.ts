import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EmissionPointService } from './emission-point.service';
import { CreateEmissionPointDto } from './dto/create-emission-point.dto';
import { UpdateEmissionPointDto } from './dto/update-emission-point.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
@UseGuards(JwtAuthGuard, IsAdminGuard)
@Controller('emission-point')
export class EmissionPointController {
  constructor(private readonly emissionPointService: EmissionPointService) {}

  @Post()
  create(@Body() createEmissionPointDto: CreateEmissionPointDto) {
    return this.emissionPointService.create(createEmissionPointDto);
  }

  @Get()
  findAll() {
    return this.emissionPointService.findAll();
  }

  @Get('active')
  findAllActive() {
    try {
      return this.emissionPointService.findAllActive();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emissionPointService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmissionPointDto: UpdateEmissionPointDto,
  ) {
    return this.emissionPointService.update(+id, updateEmissionPointDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emissionPointService.remove(+id);
  // }
}
