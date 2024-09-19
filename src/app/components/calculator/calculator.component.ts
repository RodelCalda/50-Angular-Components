
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: number | string | null = null;

  calculate(operation: string) {
    if (this.number1 !== null && this.number2 !== null) {
      switch (operation) {
        case 'add':
          this.result = this.number1 + this.number2;
          break;
        case 'subtract':
          this.result = this.number1 - this.number2;
          break;
        case 'multiply':
          this.result = this.number1 * this.number2;
          break;
        case 'divide':
          if (this.number2 === 0) {
            this.result = 'Cannot divide by zero';
          } else {
            this.result = this.number1 / this.number2;
          }
          break;
      }
    } else {
      this.result = 'Please enter both numbers';
    }
  }

}

