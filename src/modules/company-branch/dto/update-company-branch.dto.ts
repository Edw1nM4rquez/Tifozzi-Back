import { PartialType } from '@nestjs/swagger';
import { CreateCompanyBranchDto } from './create-company-branch.dto';

export class UpdateCompanyBranchDto extends PartialType(
  CreateCompanyBranchDto,
) {}
