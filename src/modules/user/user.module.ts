import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './entities/user.entity';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useValue: User,
    },
  ],
  imports: [DatabaseModule],
  exports: [UserService],
})
export class UserModule {}
