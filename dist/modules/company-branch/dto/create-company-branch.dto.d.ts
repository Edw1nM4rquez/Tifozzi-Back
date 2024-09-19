import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';
export declare class CreateCompanyBranchDto {
    readonly companyName: string;
    readonly ruc: string;
    readonly iva: number;
    readonly printTicket: boolean;
    readonly isAccounting: boolean;
    readonly isRimpe: boolean;
    readonly isWithholdingAgent: boolean;
    readonly resolutionAgent: string;
    readonly rimpeDescription: string;
    readonly environment: number;
    readonly address: CreateAddressDto;
    readonly companyId: number;
    readonly emissionPointId: number;
    readonly signatureId: number;
}
