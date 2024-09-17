import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { CompanyBranchService } from './company-branch.service';
import { CreateCompanyBranchDto } from './dto/create-company-branch.dto';
import { UpdateCompanyBranchDto } from './dto/update-company-branch.dto';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';

@Controller('company-branch')
export class CompanyBranchController {
  constructor(private readonly companyBranchService: CompanyBranchService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Post()
  create(@Body() createCompanyBranchDto: CreateCompanyBranchDto) {
    return this.companyBranchService.create(createCompanyBranchDto);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  findAll() {
    return this.companyBranchService.findAll();
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get('active')
  findAllActive() {
    try {
      return this.companyBranchService.findAllActive();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyBranchService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyBranchDto: UpdateCompanyBranchDto,
  ) {
    return this.companyBranchService.update(+id, updateCompanyBranchDto);
  }

  @Get('state/:id')
  async findBranchByState(
    @Param('id') stateId: string,
    @Res({ passthrough: true }) response: any,
  ) {
    const company = await this.companyBranchService.findBranchByState(+stateId);
    if (company) {
      response.cookie('companyId', company.id);
      //response.cookie('key', 'value');
    }
    return company;
  }
}
