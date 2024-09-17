import { PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
