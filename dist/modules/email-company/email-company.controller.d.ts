import { EmailCompanyService } from './email-company.service';
import { CreateEmailCompanyDto } from './dto/create-email-company.dto';
import { UpdateEmailCompanyDto } from './dto/update-email-company.dto';
export declare class EmailCompanyController {
    private readonly emailCompanyService;
    constructor(emailCompanyService: EmailCompanyService);
    create(createEmailCompanyDto: CreateEmailCompanyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmailCompanyDto: UpdateEmailCompanyDto): string;
    remove(id: string): string;
}
