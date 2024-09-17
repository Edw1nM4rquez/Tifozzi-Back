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
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    //try {
    return this.reservationService.create(createReservationDto);
    // } catch (error) {
    //   throw new HttpException(error, HttpStatus.BAD_REQUEST);
    // }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll(
    @Query('date_init') dateInit?: string,
    @Query('date_end') dateEnd?: string,
    @Req() request?: any,
  ) {
    if (!dateInit || !dateEnd) {
      throw new HttpException(
        'Required start and end date',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.reservationService.findAll(dateInit, dateEnd);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-reservations')
  getMyReservations(@Req() req) {
    return this.reservationService.getMyReservations(req.user.id);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
