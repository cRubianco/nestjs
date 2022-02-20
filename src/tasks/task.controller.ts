import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDTO } from './dto/CrateTaskDTO';
import { TaskDTO } from './dto/taskDTO';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}
  
  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTaskById(Number(id));
  }

  @Post()
  async createTask(@Body() task: CreateTaskDTO) {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  async editTask(@Param('id') id: string, @Body() task: TaskDTO) {
    console.log(id);
    console.log(task);

    return this.tasksService.updateTask(Number(id), task);
    // return 'update task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);

    return ' delete task';
  }

}
