import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskDTO } from './dto/taskDTO';
@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): {} {
    return {};
  }

  @Post()
  createTask(@Body() task: TaskDTO): string {
    console.log(task);

    return 'this is new task';
  }

  @Put(':id')
  editTask(@Body() task: TaskDTO, @Param('id') id): string {
    console.log(id);
    console.log(task);

    return 'update task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);

    return ' delete task';
  }
 

}
