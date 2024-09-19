import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrls: ['./multiplicationtable.component.css']
})
export class MultiplicationtableComponent {
  number: number = 0;
  table: number[] = [];

  generateTable() {
    this.table = [];
    for (let i = 1; i <= 10; i++) {
      this.table.push(this.number * i);
    }
  }
}

