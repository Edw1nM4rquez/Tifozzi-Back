import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './entities/role.entity';
import { ROLE_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    {
      provide: ROLE_REPOSITORY,
      useValue: Role,
    },
  ],
  exports: [RoleService],
})
export class RoleModule {}
