import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/createTaskDTO';
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
/*   tasks: Task[] = [
    {
      id: 1,
      title: "Testing",
      description: "Tarea1",
      state: true
    }
  ] */

  // tslint:disable-next-line: no-trailing-whitespace
  
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
    }
  }

  updateTask(id: number, task: TaskDTO) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      // this.tasks[taskIndex] = task;
      return task;
    }
    throw new HttpException('No se encontro la tarea', HttpStatus.NOT_FOUND);
  }

  deleteTask(id: number) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
    } else {
      throw new HttpException('No se encontro la tarea', HttpStatus.NOT_FOUND);
    }
  }
}
