import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  TASKS: Todo[] = [
    {id: 1, title: 'Get Car Washed', description: 'Do it before New Moon', completed: false, dueDate: new Date()},
    {id: 2, title: 'Get Haircut', description: 'Do it before Monday', completed: false, dueDate: new Date()},
    {id: 3, title: 'Get Grocery', description: 'Do it before Evening', completed: true, dueDate: new Date()}
  ];

  createTask(task: Todo): Todo {
    let id: number = this.TASKS.length + 1;
    task['id'] = id;
    console.log(task);
    this.TASKS.unshift(task)
    return task;
  }

  getAllTasks(): Todo[] {
    return [...this.TASKS]
  }

  getTaskById(taskId: number): Todo | undefined {
    return this.TASKS.find(task => task.id === taskId);
  }

  editTaskById(taskId: number, updatedData: Todo) {
    const task = this.getTaskById(taskId);
    if (task) {
      Object.assign(task, updatedData);
      return true;
    }
    return false;
  }

  deleteTaskById(taskId: number): Todo[] {
    this.TASKS = this.TASKS.filter(task => task.id !== taskId)
    return this.TASKS
  }
}
