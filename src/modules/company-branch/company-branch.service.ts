import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyBranchDto } from './dto/create-company-branch.dto';
import { UpdateCompanyBranchDto } from './dto/update-company-branch.dto';
import {
  ADDRESS_REPOSITORY,
  COMPANY_BRANCH_REPOSITORY,
} from 'src/core/constants';
import { CompanyBranch } from './entities/company-branch.entity';
import { Address } from '../address/entities/address.entity';
import { Sequelize } from 'sequelize';
import { AddressService } from '../address/address.service';
import { EmissionPoint } from '../emission-point/entities/emission-point.entity';

@Injectable()
export class CompanyBranchService {
  constructor(
    @Inject(COMPANY_BRANCH_REPOSITORY)
    private readonly companyBranchRepository: typeof CompanyBranch,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
    //private readonly addressService: AddressService
  ) {}

  async create(createCompanyBranchDto: CreateCompanyBranchDto) {
    const { address, ...companyBranchData } = createCompanyBranchDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const addressRef = await Address.create(address, {
        transaction,
      });

      console.log({ addressRef });

      const company = await this.companyBranchRepository.create(
        { ...companyBranchData, addressId: addressRef.id },
        {
          transaction,
        },
      );

      await transaction.commit();
      return company;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  async findAll() {
    return await this.companyBranchRepository.findAll({
      //where: whereCondition,
      include: [
        {
          model: Address,
          //include: [{ model: Price, where: { companyBranchId: company } }],
        },
        {
          model: EmissionPoint,
          //include: [Ingredient],
        },
      ],
    });
  }

  async findAllActive() {
    return await this.companyBranchRepository.findAll({
      where: { isActive: true },
    });
  }

  async findOne(id: number) {
    return await this.companyBranchRepository.findByPk(id, {
      include: [
        {
          model: Address,
        },
        {
          model: EmissionPoint,
        },
      ],
    });
  }

  async update(id: number, updateCompanyBranchDto: UpdateCompanyBranchDto) {
    // return await this.companyBranchRepository.update(companyBranchData, {
    //   where: { id },
    // });
    const { address, ...companyBranchData } = updateCompanyBranchDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const addressRef = await Address.update(address, {
        where: { id: address.id },
        transaction,
      });

      console.log({ addressRef });

      const company = await this.companyBranchRepository.update(
        { ...companyBranchData, addressId: address.id },
        {
          where: { id },
          transaction,
        },
      );

      await transaction.commit();
      return company;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  async findBranchByState(stateId: number) {
    return await this.companyBranchRepository.findOne({
      include: [
        { model: Address, where: { stateId } },
      ],
    });
  }
}
