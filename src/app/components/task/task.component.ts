import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model';

@Component({
  selector: 'app-task',
  imports: [CommonModule, MaterialModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() todoItem!: Todo;
  @Output() deleteTaskEvent = new EventEmitter<number>();

  @Output() editTaskEvent = new EventEmitter<number>();
  constructor() { }

  editTask(taskId: number) {
    this.editTaskEvent.emit(taskId);
  }
  
  deleteTask(taskId: number) {
    this.deleteTaskEvent.emit(taskId);
  }
}
