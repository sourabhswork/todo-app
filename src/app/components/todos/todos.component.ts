import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, MaterialModule, TaskComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = []


  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.getTodos()
  }

  getTodos(){
    this.todos = this.todoService.getAllTasks()
  }

  deleteTodo(taskId: number) {
    this.todoService.deleteTaskById(taskId);
    this.getTodos();
  }
}
