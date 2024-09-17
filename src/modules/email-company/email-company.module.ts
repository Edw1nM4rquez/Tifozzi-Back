import { Module } from '@nestjs/common';
import { EmailCompanyService } from './email-company.service';
import { EmailCompanyController } from './email-company.controller';
import { EmailCompany } from './entities/email-company.entity';
import { EMAIL_COMPANY_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [EmailCompanyController],
  providers: [
    EmailCompanyService,
    {
      provide: EMAIL_COMPANY_REPOSITORY,
      useValue: EmailCompany,
    },
  ],
  exports: [EmailCompanyService],
})
export class EmailCompanyModule {}
