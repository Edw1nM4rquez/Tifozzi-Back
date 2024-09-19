import { EmailTemplateService } from './email-template.service';
import { CreateEmailTemplateDto } from './dto/create-email-template.dto';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';
export declare class EmailTemplateController {
    private readonly emailTemplateService;
    constructor(emailTemplateService: EmailTemplateService);
    create(createEmailTemplateDto: CreateEmailTemplateDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmailTemplateDto: UpdateEmailTemplateDto): string;
    remove(id: string): string;
}
