import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { IMAGE_REPOSITORY } from 'src/core/constants';
import { Image } from './entities/image.entity';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [ImageController],
  imports: [DatabaseModule],
  providers: [
    ImageService,
    {
      provide: IMAGE_REPOSITORY,
      useValue: Image,
    },
  ],
  exports: [ImageService],
})
export class ImageModule {}
