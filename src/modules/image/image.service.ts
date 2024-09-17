import { Inject, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import { IMAGE_REPOSITORY } from 'src/core/constants';
import { Image } from './entities/image.entity';
import * as sharp from 'sharp';
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class ImageService {
  constructor(
    @Inject(IMAGE_REPOSITORY)
    private readonly imageRepository: typeof Image,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async create(files: Express.Multer.File[]) {
    const uploadedImages = [];
    const uploadDirectory = path.join(process.cwd(), 'uploads', 'images');
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }
    for (const file of files) {
      const uniqueFilename = uuidv4() + path.extname(file.originalname);
      const filePath = path.join(uploadDirectory, uniqueFilename);
      await fs.promises.writeFile(filePath, file.buffer);

      let length: string | null = '';
      const dimensions = await this.getImageDimensions(filePath);
      if (dimensions) {
        const { width, height } = dimensions;
        length = `${width}x${height}`;
      }
      await this.imageRepository.create({
        img: path.join('uploads', 'images', uniqueFilename),
        name: file.originalname,
        alt: file.originalname,
        title: file.originalname,
        size: file.size,
        length,
      });
      uploadedImages.push({ filename: uniqueFilename, path: filePath });
    }
    return uploadedImages;
  }

  private async getImageDimensions(filePath: string) {
    try {
      const metadata = await sharp(filePath).metadata();
      const { width, height } = metadata;
      return { width, height };
    } catch (error) {
      console.error('Error obteniendo dimensiones de imagen:', error);
      return null;
    }
  }

  async findAll(q?: string) {
    let whereCondition = {};
    if (q) {
      whereCondition = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { alt: { [Op.iLike]: `%${q}%` } },
          { title: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } },
          { img: { [Op.iLike]: `%${q}%` } },
        ],
      };
    }
    const products = await this.imageRepository.findAll({
      where: whereCondition,
      order: [['id', 'DESC']],
    });
    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
