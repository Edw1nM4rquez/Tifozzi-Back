import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateImageDto } from 'src/modules/image/dto/create-image.dto';
import * as mime from 'mime-types';

@Injectable()
export class ImageValidationPipe
  implements
    PipeTransform<Express.Multer.File[], Promise<Express.Multer.File[]>>
{
  async transform(
    value: Express.Multer.File[],
  ): Promise<Express.Multer.File[]> {
    console.log('pipe value', value);
    if (!value || value.length === 0) {
      throw new BadRequestException('No files were uploaded.');
    }

    const isValidImages = value.every((file) => {
      const mimeType = mime.lookup(file.originalname);
      return mimeType && mimeType.startsWith('image');
    });

    if (!isValidImages) {
      throw new BadRequestException('Uploaded files must be images.');
    }

    return value;
  }
}
