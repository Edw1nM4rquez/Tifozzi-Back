import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { Permission } from './entities/permission.entity';
import { PERMISSION_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [PermissionController],
  providers: [
    PermissionService,
    {
      provide: PERMISSION_REPOSITORY,
      useValue: Permission,
    },
  ],
  exports: [PermissionService],
})
export class PermissionModule {}
