import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { RESERVATION_REPOSITORY } from 'src/core/constants';
import { Reservation } from './entities/reservation.entity';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService,
    {
      provide: RESERVATION_REPOSITORY,
      useValue: Reservation,
    },
  ],
})
export class ReservationModule {}
