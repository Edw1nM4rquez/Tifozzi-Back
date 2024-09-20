import { CompanyBranchService } from './company-branch.service';
import { CreateCompanyBranchDto } from './dto/create-company-branch.dto';
import { UpdateCompanyBranchDto } from './dto/update-company-branch.dto';
export declare class CompanyBranchController {
    private readonly companyBranchService;
    constructor(companyBranchService: CompanyBranchService);
    create(createCompanyBranchDto: CreateCompanyBranchDto): Promise<import("./entities/company-branch.entity").CompanyBranch>;
    findAll(): Promise<import("./entities/company-branch.entity").CompanyBranch[]>;
    findAllActive(): Promise<import("./entities/company-branch.entity").CompanyBranch[]>;
    findOne(id: string): Promise<import("./entities/company-branch.entity").CompanyBranch>;
    update(id: string, updateCompanyBranchDto: UpdateCompanyBranchDto): Promise<[affectedCount: number]>;
    findBranchByState(stateId: string, response: any): Promise<import("./entities/company-branch.entity").CompanyBranch>;
}
