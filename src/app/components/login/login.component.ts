import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router, private notify: SnackbarService) { }

  // state management
  otpRequested = false;
  otpRecieved = false;
  otpVerified = false;
  loggedIn = false;
  currentOtp: string = '';


  requestOtp() {
    this.otpRequested = true;
    // Logic to request OTP
    this.currentOtp = this.loginService.generateOtp()
    console.log(this.currentOtp);
    this.otpRecieved = true;
  }

  login(otp: string) {
    if (this.loginService.validateOtp(otp.toString(), this.currentOtp.toString())) {
      this.otpVerified = true;
      this.loggedIn = true;
      this.router.navigate(['/home']);
      console.log("Login Successful");
      this.notify.showSuccessMessage('Login Successful 🤧');
    } else {
      alert("Invalid OTP");
      this.otpVerified = false;
      this.loggedIn = false;
      console.error("Invalid OTP");
    }
  }
}
