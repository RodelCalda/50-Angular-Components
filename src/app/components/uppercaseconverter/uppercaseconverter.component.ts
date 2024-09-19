import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent {
  inputText: string = '';
  convertedText: string = '';

  convertToUppercase() {
    this.convertedText = this.inputText.toUpperCase();
  }
}

