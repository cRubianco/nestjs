import { Module } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';
import { TasksController } from './task.controller';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService]
})

export class TasksModule {}
