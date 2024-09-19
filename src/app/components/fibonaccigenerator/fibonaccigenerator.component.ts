import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrls: ['./fibonaccigenerator.component.css']
})
export class FibonaccigeneratorComponent {
  numberOfTerms: number = 0;
  fibonacciSeries: number[] = [];

  generateFibonacci() {
    this.fibonacciSeries = [];
    let a = 0, b = 1;
    for (let i = 0; i < this.numberOfTerms; i++) {
      this.fibonacciSeries.push(a);
      [a, b] = [b, a + b];  // Swapping values and updating the Fibonacci sequence
    }
  }
}
