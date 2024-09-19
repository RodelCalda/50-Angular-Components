import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrls: ['./interestcalculator.component.css']
})
export class InterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  simpleInterest: number | null = null;

  calculateInterest() {
    this.simpleInterest = (this.principal * this.rate * this.time) / 100;
  }
}
