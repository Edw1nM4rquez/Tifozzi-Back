import { Injectable } from '@nestjs/common';
import { CreateEmailCompanyDto } from './dto/create-email-company.dto';
import { UpdateEmailCompanyDto } from './dto/update-email-company.dto';

@Injectable()
export class EmailCompanyService {
  create(createEmailCompanyDto: CreateEmailCompanyDto) {
    return 'This action adds a new emailCompany';
  }

  findAll() {
    return `This action returns all emailCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailCompany`;
  }

  update(id: number, updateEmailCompanyDto: UpdateEmailCompanyDto) {
    return `This action updates a #${id} emailCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailCompany`;
  }
}
