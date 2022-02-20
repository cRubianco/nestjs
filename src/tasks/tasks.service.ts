import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

// tslint:disable-next-line: quotemark
import { Task } from "../tasks/interfaces/Task";
import { CreateTaskDTO } from './dto/CrateTaskDTO';
import { TaskDTO } from './dto/taskDTO';

@Injectable()
export class TasksService {
  private lastTaskId = 0;
  private tasks: Task[] = [];

/*   tasks: Task[] = [
    {
      id: 1,
      title: "Testing",
      description: "Tarea1",
      state: true
    }
  ] */

  getTasks() {
    return this.tasks;
  }
  // tslint:disable-next-line: no-trailing-whitespace
  
  getTaskById(id: number) {
    // tslint:disable-next-line: no-shadowed-variable
    const task = this.tasks.find(task => task.id === id)
    if (task) {
      return task;
    }
    throw new HttpException('No se encontro la Tarea', HttpStatus.NOT_FOUND);
  }

  createTask(task: CreateTaskDTO){
    const newTask = {
      id: ++this.lastTaskId,
      ...task
    }
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, task: TaskDTO) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      this.tasks[taskIndex] = task;
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
