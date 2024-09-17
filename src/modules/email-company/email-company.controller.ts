import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailCompanyService } from './email-company.service';
import { CreateEmailCompanyDto } from './dto/create-email-company.dto';
import { UpdateEmailCompanyDto } from './dto/update-email-company.dto';

@Controller('email-company')
export class EmailCompanyController {
  constructor(private readonly emailCompanyService: EmailCompanyService) {}

  @Post()
  create(@Body() createEmailCompanyDto: CreateEmailCompanyDto) {
    return this.emailCompanyService.create(createEmailCompanyDto);
  }

  @Get()
  findAll() {
    return this.emailCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailCompanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailCompanyDto: UpdateEmailCompanyDto) {
    return this.emailCompanyService.update(+id, updateEmailCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailCompanyService.remove(+id);
  }
}
