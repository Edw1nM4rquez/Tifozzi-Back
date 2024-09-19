import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
export declare class AddressService {
    private readonly addressRepository;
    constructor(addressRepository: typeof Address);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findAllByUser(id: number): Promise<Address[]>;
    updateByUser(id: number, updateAddressDto: UpdateAddressDto): Promise<[affectedCount: number]>;
    deleteByUser(id: number): Promise<number>;
    deleteByUserLoged(id: number, userId: number): Promise<number>;
}
