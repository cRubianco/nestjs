import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksEntity } from './tasks.entity';
import { TasksRepository } from './tasks.repository';
import { TaskDTO } from './dto/task.dto';
import { MessageDTO } from 'src/utils/messageDTO';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private taskRepository: TasksRepository
  ) {}

  async getAllTasks(): Promise<TasksEntity[]> {
    const listTasks = await this.taskRepository.find();
    if (!listTasks.length) {
      throw new NotFoundException({message: 'No se encontraron tareas'});
    }
    return listTasks;
  }

  async getTaskById(id: number): Promise<TasksEntity> {
    const task = await this.taskRepository.findOne(id)
    if(!task) {
      throw new NotFoundException({message: `No se encontro la tarea con el id ${id}`});
    }
    return task;
  }

  async getTaskByName(name: string): Promise<TasksEntity> {
    const task = await this.taskRepository.findOne({title: name});
    // if(!task) {
    //   throw new NotFoundException({message: `No se encontro la tarea con el título ${name}`});
    // }
    return task;
  }

  async createTask(dto: TaskDTO): Promise<any> {
    //Verifico si existe
    const exists = await this.getTaskByName(dto.title);
    if (exists) throw new BadRequestException({message: "El título existe en la bd"})
    const task = this.taskRepository.create(dto);
    await this.taskRepository.save(task);
    // return {message: `Se creo una nueva tarea `}   
    return new MessageDTO('producto creado');
  }

  async updateTask(id: number, dto: TaskDTO): Promise<any> {
    const task =  await this.getTaskById(id);
    //Verifico si existe
    if(!task) {
      throw new BadRequestException({message: 'La tarea no existe en la BD'})
    }
    //Verifico si existe y son distintos los id
    const exists = await this.getTaskByName(dto.title);
    if (exists && exists.id !== id) {
      throw new BadRequestException({message: '.....'})
    }
    dto.title
     ?  task.title = dto.title
     :  task.title = task.title; 
    dto.description
     ?  task.description = dto.description
     :  task.description = task.description; 
     dto.state
     ?  task.state = dto.state
     :  task.state = task.state; 
    await this.taskRepository.save(task);
    // return {message: `Se actualizo la tarea con el título ${task.title} `}
    return new MessageDTO(`Se actualizo la tarea con el título ${task.title} `);
  }  

  async deleteTask(id: number): Promise<any> {
    const task = await this.getTaskById(id);
    await this.taskRepository.delete(task);
    return new MessageDTO(`Se borro la tarea con el título ${task.id} `);
  }

}
