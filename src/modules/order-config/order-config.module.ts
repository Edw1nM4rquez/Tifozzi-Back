import { Module } from '@nestjs/common';
import { OrderConfigService } from './order-config.service';
import { OrderConfigController } from './order-config.controller';
import { ORDER_CONFIG_REPOSITORY } from 'src/core/constants';
import { OrderConfig } from './entities/order-config.entity';

@Module({
  controllers: [OrderConfigController],
  providers: [
    OrderConfigService,
    {
      provide: ORDER_CONFIG_REPOSITORY,
      useValue: OrderConfig,
    },
  ],
  exports: [OrderConfigService],
})
export class OrderConfigModule {}
