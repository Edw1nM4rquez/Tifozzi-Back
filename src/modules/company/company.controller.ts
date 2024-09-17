import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';

@UseGuards(JwtAuthGuard, IsAdminGuard)
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createOrUpdate(createCompanyDto);
  }

  @Get()
  findFirst() {
    return this.companyService.findFirst();
  }
}
