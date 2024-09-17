import { Inject, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ADDRESS_REPOSITORY } from 'src/core/constants';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @Inject(ADDRESS_REPOSITORY)
    private readonly addressRepository: typeof Address,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    return await this.addressRepository.create(createAddressDto);
  }

  async findAllByUser(id: number) {
    return await this.addressRepository.findAll({ where: { userId: id } });
  }

  async updateByUser(id: number, updateAddressDto: UpdateAddressDto) {
    return await this.addressRepository.update(updateAddressDto, {
      where: { id, userId: updateAddressDto.userId },
    });
  }

  async deleteByUser(id: number) {
    return await this.addressRepository.destroy({
      where: { id },
    });
  }

  async deleteByUserLoged(id: number, userId: number) {
    return await this.addressRepository.destroy({
      where: { id, userId },
    });
  }
}
