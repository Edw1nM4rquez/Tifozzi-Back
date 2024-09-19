import { CreateCompanyBranchDto } from './dto/create-company-branch.dto';
import { UpdateCompanyBranchDto } from './dto/update-company-branch.dto';
import { CompanyBranch } from './entities/company-branch.entity';
import { Sequelize } from 'sequelize';
export declare class CompanyBranchService {
    private readonly companyBranchRepository;
    private readonly sequelize;
    constructor(companyBranchRepository: typeof CompanyBranch, sequelize: Sequelize);
    create(createCompanyBranchDto: CreateCompanyBranchDto): Promise<CompanyBranch>;
    findAll(): Promise<CompanyBranch[]>;
    findAllActive(): Promise<CompanyBranch[]>;
    findOne(id: number): Promise<CompanyBranch>;
    update(id: number, updateCompanyBranchDto: UpdateCompanyBranchDto): Promise<[affectedCount: number]>;
    findBranchByState(stateId: number): Promise<CompanyBranch>;
}
