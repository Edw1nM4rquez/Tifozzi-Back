import { PartialType } from '@nestjs/swagger';
import { CreateCartDetailDto } from './create-cart-detail.dto';

export class UpdateCartDetailDto extends PartialType(CreateCartDetailDto) {}
