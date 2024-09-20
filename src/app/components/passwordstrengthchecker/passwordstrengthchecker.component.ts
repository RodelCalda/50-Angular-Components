import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrengthchecker',
  templateUrl: './passwordstrengthchecker.component.html',
  styleUrls: ['./passwordstrengthchecker.component.css']
})
export class PasswordStrengthCheckerComponent {
  password: string = '';
  strengthMessage: string = '';

  checkPasswordStrength() {
    let strength = 0;

    if (this.password.length >= 8) strength++;
    if (/[A-Z]/.test(this.password)) strength++;
    if (/[0-9]/.test(this.password)) strength++;
    if (/[\W_]/.test(this.password)) strength++;

    switch (strength) {
      case 0:
      case 1:
        this.strengthMessage = 'Weak';
        break;
      case 2:
        this.strengthMessage = 'Moderate';
        break;
      case 3:
      case 4:
        this.strengthMessage = 'Strong';
        break;
      default:
        this.strengthMessage = '';
    }
  }
}
