import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from './entities/company.entity';
import { COMPANY_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [CompanyController],
  providers: [
    CompanyService,
    {
      provide: COMPANY_REPOSITORY,
      useValue: Company,
    },
  ],
  exports: [CompanyService],
})
export class CompanyModule {}
