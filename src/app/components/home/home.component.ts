import { Component } from '@angular/core';
import { SnackbarService } from '../../service/snackbar.service';
import { MaterialModule } from '../../material/material.module';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private notify: SnackbarService) {}

  ngOnInit() {
    this.notify.showSuccessMessage('Welcome! lot to do today.. 🤧');
  }
}
