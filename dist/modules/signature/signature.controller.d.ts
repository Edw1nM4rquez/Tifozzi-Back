import { SignatureService } from './signature.service';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
export declare class SignatureController {
    private readonly signatureService;
    constructor(signatureService: SignatureService);
    create(createSignatureDto: CreateSignatureDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSignatureDto: UpdateSignatureDto): string;
    remove(id: string): string;
}
