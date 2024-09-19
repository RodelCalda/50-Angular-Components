import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrls: ['./currencyformatter.component.css']
})
export class CurrencyformatterComponent {
  amount: number = 0;
  currencyType: string = 'USD';  // Default currency
  formattedAmount: string | null = null;

  formatCurrency() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.currencyType,
    });
    this.formattedAmount = formatter.format(this.amount);
  }
}
