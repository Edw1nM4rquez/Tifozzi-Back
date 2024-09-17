import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { RESERVATION_REPOSITORY } from 'src/core/constants';
import { Reservation } from './entities/reservation.entity';
import { Table } from '../table/entities/table.entity';
import { Zone } from '../zone/entities/zone.entity';
import { Op } from 'sequelize';

@Injectable()
export class ReservationService {
  constructor(
    @Inject(RESERVATION_REPOSITORY)
    private readonly reservationRepository: typeof Reservation,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const { date, tableId } = createReservationDto;

    // Convertir la fecha a un objeto Date
    const reservationDate = new Date(date);

    // Calcular el rango de tiempo de una hora antes y una hora después
    const startTime = new Date(reservationDate);
    startTime.setHours(reservationDate.getHours() - 1);

    const endTime = new Date(reservationDate);
    endTime.setHours(reservationDate.getHours() + 1);

    // Verificar si hay reservas en el mismo rango de tiempo para la misma mesa
    const existingReservations = await this.reservationRepository.findAll({
      where: {
        tableId: tableId,
        date: {
          [Op.between]: [startTime, endTime],
        },
      },
    });

    // Si existe una reserva en ese rango de tiempo, retornar un error
    if (existingReservations.length > 0) {
      //console.log("existingReservations", existingReservations);
      throw new BadRequestException(
        'The table is not available in the selected time range.',
      );
    }

    // Crear la nueva reserva si no hay conflictos
    return this.reservationRepository.create(createReservationDto);
  }

  async findAll(dateInit: string, dateEnd: string): Promise<Reservation[]> {
    // Convertir las fechas de entrada a Date objects y ajustar las horas
    const adjustedDateInit = new Date(`${dateInit}T00:00:00.000Z`);
    const adjustedDateEnd = new Date(`${dateEnd}T23:59:59.999Z`);

    return this.reservationRepository.findAll({
      where: {
        date: {
          [Op.between]: [adjustedDateInit, adjustedDateEnd],
        },
      },
    });
  }

  findOne(id: number) {
    return this.reservationRepository.findByPk(id, {
      include: [
        {
          model: Table,
          include: [{ model: Zone }],
        },
      ],
    });
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.update(updateReservationDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.reservationRepository.destroy({ where: { id } });
  }

  getMyReservations(userId: number) {
    return this.reservationRepository.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: Table,
          include: [{ model: Zone }],
        },
      ],
    });
  }
}
