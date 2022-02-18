import { Controller, Get, Post, Put, Delete } from '@nestjs/common';


@Controller('tasks')
export class TasksController {

  @Get()
  getTasks() {
    return 'tasks';
  }

  @Post()
  createTask() {
    return 'this is new task';
  }

  @Put()
  editTask() {
    return 'update task';
  }

  @Delete() 
  deleteTask() {
    return ' delete task';
  }

}
