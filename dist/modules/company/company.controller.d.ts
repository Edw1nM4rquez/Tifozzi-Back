import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<import("./entities/company.entity").Company>;
    findFirst(): Promise<import("./entities/company.entity").Company>;
}
