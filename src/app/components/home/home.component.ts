import { Component } from '@angular/core';
import { SnackbarService } from '../../service/snackbar.service';
import { MaterialModule } from '../../material/material.module';
import { FooterComponent } from '../footer/footer.component';
import { TodosComponent } from "../todos/todos.component";
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, FooterComponent, TodosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    
  }

  addTodo(){
    // this.todoService.createTask()
  }
}
