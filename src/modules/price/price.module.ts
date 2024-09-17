import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { PRICE_REPOSITORY } from 'src/core/constants';
import { Price } from './entities/price.entity';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [PriceController],
  imports: [DatabaseModule],
  providers: [
    PriceService,
    {
      provide: PRICE_REPOSITORY,
      useValue: Price,
    },
  ],
  exports:  [PriceService],
})
export class PriceModule {}
