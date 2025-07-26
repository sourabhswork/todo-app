import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  validateOtp(inputOtp: string, generatedOtp: string): boolean {
    return inputOtp === generatedOtp;
  }
}
