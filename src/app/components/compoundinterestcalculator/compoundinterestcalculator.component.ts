import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrls: ['./compoundinterestcalculator.component.css']
})
export class CompoundinterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  frequency: number = 1;  // Default frequency: annually
  compoundInterest: number | null = null;
  totalAmount: number | null = null;

  calculateCompoundInterest() {
    const r = this.rate / 100; // Convert percentage to decimal
    const n = this.frequency;
    const t = this.time;
    this.totalAmount = this.principal * Math.pow(1 + r / n, n * t);
    this.compoundInterest = this.totalAmount - this.principal;
  }
}

