import { PartialType } from '@nestjs/swagger';
import { CreateOrderConfigDto } from './create-order-config.dto';

export class UpdateOrderConfigDto extends PartialType(CreateOrderConfigDto) {}
