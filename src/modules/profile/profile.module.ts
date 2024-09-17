import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Profile } from './entities/profile.entity';
import { POFILE_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    {
      provide: POFILE_REPOSITORY,
      useValue: Profile,
    },
  ],
  exports: [ProfileService],
})
export class ProfileModule {}
