import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrls: ['./fahrenheittocelsius.component.css']
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number = 0;
  celsius: number | null = null;

  convertToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }
}

