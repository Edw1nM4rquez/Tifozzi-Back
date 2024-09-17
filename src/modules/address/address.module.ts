import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { Address } from './entities/address.entity';
import { ADDRESS_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [AddressController],
  providers: [
    AddressService,
    {
      provide: ADDRESS_REPOSITORY,
      useValue: Address,
    },
  ],
  exports: [AddressService],
})
export class AddressModule {}
