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
} from '@nestjs/common';
import { ZoneService } from './zone.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@Controller('zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  create(@Body() createZoneDto: CreateZoneDto) {
    return this.zoneService.create(createZoneDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll() {
    return this.zoneService.findAll();
  }

  @Get('active')
  findAllActive() {
    return this.zoneService.findActive();
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zoneService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateZoneDto: UpdateZoneDto) {
    return this.zoneService.update(+id, updateZoneDto);
  }

  // @UseGuards(JwtAuthGuard, IsAdminGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.zoneService.remove(+id);
  // }
}
