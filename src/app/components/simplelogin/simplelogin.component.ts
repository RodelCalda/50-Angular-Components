import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrls: ['./simplelogin.component.css']
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string = '';

  onLogin() {
    if (this.email && this.password) {
      this.loginMessage = `Login successful for email: ${this.email}`;
    } else {
      this.loginMessage = 'Please enter both email and password.';
    }
  }
}
