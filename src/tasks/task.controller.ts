import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateTaskDTO } from './dto/createTaskDTO';
import { TaskDTO } from './dto/taskDTO';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}
  
  @Get()
  async getTasks() {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() taskDTO: CreateTaskDTO) {
    return await this.tasksService.createTask(taskDTO);
  }

  @Put(':id')
  async updateTask(@Param('id', ParseIntPipe)id: number, @Body() taskDTO: TaskDTO) {
    console.log(id);
    console.log(taskDTO);
    return await this.tasksService.updateTask(id, taskDTO), {message: `Se actualizo la tarea ${taskDTO.title} `};
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe)id: number) {
    return await this.tasksService.deleteTask(id), `delete task ${id}`;
  }

}
