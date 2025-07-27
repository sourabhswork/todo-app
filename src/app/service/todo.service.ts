import { Injectable } from '@angular/core';
import { Todo } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  TASKS: Todo[] = [
    { id: 1, title: 'Get Car Washed', description: 'Do it before New Moon', completed: false, dueDate: new Date() },
    { id: 2, title: 'Get Haircut', description: 'Do it before Monday', completed: false, dueDate: new Date() },
    { id: 3, title: 'Get Grocery', description: 'Do it before Evening', completed: true, dueDate: new Date() }
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

  deleteTaskById(taskId: number): Boolean {
    const taskIndex = this.TASKS.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.TASKS.splice(taskIndex, 1);
      console.log(taskIndex);
      
      return true;
    }
    return false
  }
}
