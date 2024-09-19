import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: typeof Company);
    createOrUpdate(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findFirst(): Promise<Company>;
}
