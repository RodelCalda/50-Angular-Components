import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrls: ['./usernamevalidator.component.css']
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean | null = null; // To store the result of validation

  validateUsername() {
    const minLength = 5;
    const maxLength = 15;
    const regex = /^[a-zA-Z0-9]+$/; // Only alphanumeric characters

    if (this.username.length >= minLength && 
        this.username.length <= maxLength &&
        regex.test(this.username)) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
