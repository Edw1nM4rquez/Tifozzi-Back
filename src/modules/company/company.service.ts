import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { COMPANY_REPOSITORY } from 'src/core/constants';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(COMPANY_REPOSITORY)
    private readonly companyRepository: typeof Company,
  ) {}

  async createOrUpdate(createCompanyDto: CreateCompanyDto) {
    try {
      const company = await this.companyRepository.findOne();
      if (company) {
        await this.companyRepository.update(createCompanyDto, {
          where: { id: company.id },
        });
        return await this.companyRepository.findOne(company.id);
      } else {
        return await this.companyRepository.create(createCompanyDto);
      }
    } catch (error) {
      throw error;
    }
  }

  async findFirst() {
    return await this.companyRepository.findOne();
  }
}
