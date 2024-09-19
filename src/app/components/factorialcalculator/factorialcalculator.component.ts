import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrls: ['./factorialcalculator.component.css']
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.factorialOf(this.number);
    } else {
      this.factorial = null; // Handle invalid input
    }
  }

  factorialOf(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorialOf(n - 1);
  }
}
