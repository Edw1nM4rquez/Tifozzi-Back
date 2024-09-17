import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { STATE_REPOSITORY } from 'src/core/constants';
import { State } from './entities/state.entity';

@Module({
  controllers: [StateController],
  providers: [
    StateService,
    {
      provide: STATE_REPOSITORY,
      useValue: State,
    },
  ],
  exports: [StateService],
})
export class StateModule {}
