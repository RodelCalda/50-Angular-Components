import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css']
})
export class TemperatureconverterComponent {
  temperature: number = 0;
  convertedTemperature: number | null = null;
  conversionType: string = 'CtoF';  // Default conversion type: Celsius to Fahrenheit

  convertTemperature() {
    if (this.conversionType === 'CtoF') {
      this.convertedTemperature = (this.temperature * 9/5) + 32;
    } else {
      this.convertedTemperature = (this.temperature - 32) * 5/9;
    }
  }
}

