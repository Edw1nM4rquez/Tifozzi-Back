import { CreateEmailTemplateDto } from './dto/create-email-template.dto';
import { UpdateEmailTemplateDto } from './dto/update-email-template.dto';
export declare class EmailTemplateService {
    create(createEmailTemplateDto: CreateEmailTemplateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmailTemplateDto: UpdateEmailTemplateDto): string;
    remove(id: number): string;
}
