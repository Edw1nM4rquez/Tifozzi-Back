import { CreateEmailCompanyDto } from './dto/create-email-company.dto';
import { UpdateEmailCompanyDto } from './dto/update-email-company.dto';
export declare class EmailCompanyService {
    create(createEmailCompanyDto: CreateEmailCompanyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmailCompanyDto: UpdateEmailCompanyDto): string;
    remove(id: number): string;
}
