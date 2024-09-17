import { Module } from '@nestjs/common';
import { CompanyBranchService } from './company-branch.service';
import { CompanyBranchController } from './company-branch.controller';
import { CompanyBranch } from './entities/company-branch.entity';
import { COMPANY_BRANCH_REPOSITORY } from 'src/core/constants';
import { DatabaseModule } from 'src/core/database/database.module';
import { AddressModule } from '../address/address.module';

@Module({
  controllers: [CompanyBranchController],
  imports: [AddressModule, DatabaseModule],
  providers: [
    CompanyBranchService,
    {
      provide: COMPANY_BRANCH_REPOSITORY,
      useValue: CompanyBranch,
    },
  ],
  //exports: [CompanyBranchService],
})
export class CompanyBranchModule {}
