import { Module } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';
import { TaskEntity } from './task.entity';
import { TasksController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TasksService],
  controllers: [TasksController]
})

export class TasksModule {}
