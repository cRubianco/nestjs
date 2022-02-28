import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

  constructor(
    private readonly taskService: TasksService 
  ) {}

  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number ){
    return await this.taskService.getTaskById(id);
  }

  @Get('title')
  async getTaskByName(@Param('title') title: string ){
    return await this.taskService.getTaskByName(title);
  }
  
  @Post()
  async createTask(@Body() dto: TaskDTO) {
    return await this.taskService.createTask(dto);
  }

  @Put(':id')
  async updateTask(@Param('id', ParseIntPipe) id: number, @Body() dto: TaskDTO) {
    return await this.taskService.updateTask(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.deleteTask(id);
  }

}
