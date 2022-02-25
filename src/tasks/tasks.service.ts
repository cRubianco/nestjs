import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/createTaskDTO';
import { TaskDTO } from './dto/taskDTO';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskEntity) 
    private taskRepository: TaskRepository
  ){}
  
  async getTasks(): Promise<TaskEntity[]> {
    const tasksList = await this.taskRepository.find();
    if (!tasksList.length) {
      throw new NotFoundException({message: 'No se han encontrado tareas'});
    }
    return tasksList;
  }

  async getTaskById(id: number): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException({message: 'No se encontro la Tarea'});
    }
    return task;
  }
  
  async getTaskByTitle(title: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({title: title});
    return task;
  }

  async createTask(dto: CreateTaskDTO): Promise<any>{
    const task = this.taskRepository.create(dto)
    await this.taskRepository.save(task);
    return {message: 'Nueva Tarea creada'};
  }
  
  async updateTask(id: number, dto: TaskDTO): Promise<any> {
    const task = await this.getTaskById(id);
    dto.title? task.title=dto.title : task.title=task.title;
    dto.description
      ? task.description=dto.description 
      : task.description=task.description;
    await this.taskRepository.save(task);  
    return {message: `Se actualizo la tarea ${task.title} `};
  }

  async deleteTask(id: number): Promise<any> {
    const taskDelete = await this.getTaskById(id);
    await this.taskRepository.delete(taskDelete);
    return {message: `Se actualizo la tarea ${taskDelete.title} `};
  }

}
