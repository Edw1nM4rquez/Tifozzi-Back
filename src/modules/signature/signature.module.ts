import { Module } from '@nestjs/common';
import { SignatureService } from './signature.service';
import { SignatureController } from './signature.controller';
import { Signature } from './entities/signature.entity';
import { SIGNATURE_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [SignatureController],
  providers: [
    SignatureService,
    {
      provide: SIGNATURE_REPOSITORY,
      useValue: Signature,
    },
  ],
  exports: [SignatureService],
})
export class SignatureModule {}
