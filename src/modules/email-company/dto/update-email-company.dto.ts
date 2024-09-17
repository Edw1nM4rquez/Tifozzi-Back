import { PartialType } from '@nestjs/swagger';
import { CreateEmailCompanyDto } from './create-email-company.dto';

export class UpdateEmailCompanyDto extends PartialType(CreateEmailCompanyDto) {}
