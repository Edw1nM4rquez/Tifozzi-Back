import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
export declare class SignatureService {
    create(createSignatureDto: CreateSignatureDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSignatureDto: UpdateSignatureDto): string;
    remove(id: number): string;
}
