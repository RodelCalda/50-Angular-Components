import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrls: ['./uppercasegreeting.component.css']
})
export class UppercasegreetingComponent {
  userName: string = '';
  upperCaseName: string = '';

  convertToUppercase() {
    this.upperCaseName = this.userName.toUpperCase();
  }
}

