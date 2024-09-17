import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { Department } from './entities/department.entity';
import { DEPARTMENT_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    {
      provide: DEPARTMENT_REPOSITORY,
      useValue: Department,
    },
  ],
  exports: [DepartmentService],
})
export class DepartmentModule {}
