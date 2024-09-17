import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  readonly alt: string;
  readonly title: string;
  readonly description: string;
  @IsArray()
  @ArrayMinSize(1)
  files: Express.Multer.File[];
}
