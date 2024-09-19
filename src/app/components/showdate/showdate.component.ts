import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  dateTime: string = '';

  showDateTime() {
    const now = new Date();
    this.dateTime = now.toLocaleString();
  }

}