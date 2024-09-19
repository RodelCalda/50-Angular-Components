import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrls: ['./oddsumcalculator.component.css']
})
export class OddsumcalculatorComponent {
  inputNumber: number = 0;
  sumOfOdds: number = 0;

  calculateOddSum() {
    this.sumOfOdds = 0;
    for (let i = 1; i <= this.inputNumber; i++) {
      if (i % 2 !== 0) { // Check if the number is odd
        this.sumOfOdds += i;
      }
    }
  }
}
