import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  amount: number | null = null;
  convertedAmount: number | null = null;
  exchangeRate: number = 56;

  convertCurrency() {
    if (this.amount !== null) {
      this.convertedAmount = this.amount * this.exchangeRate;
    }
  }

}
