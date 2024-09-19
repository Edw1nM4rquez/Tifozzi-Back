import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<import("./entities/address.entity").Address>;
    findAllByUser(id: string): Promise<import("./entities/address.entity").Address[]>;
    updateByUser(id: string, createAddressDto: CreateAddressDto): Promise<[affectedCount: number]>;
    deleteByUser(id: string): Promise<number>;
    createMe(req: any, createAddressDto: CreateAddressDto): Promise<import("./entities/address.entity").Address>;
    findAllByMe(req: any): Promise<import("./entities/address.entity").Address[]>;
    updateByMe(req: any, id: string, updateAddressDto: UpdateAddressDto): Promise<[affectedCount: number]>;
    deleteByMe(req: any, id: string): Promise<number>;
}
