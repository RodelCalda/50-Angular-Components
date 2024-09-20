import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {
  city: string = '';
  weatherData: any;
  apiKey: string = 'bd5e378503939ddaee76f12ad7a97608'; 

  constructor(private http: HttpClient) {}

  getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
    this.http.get(url).subscribe(data => {
      this.weatherData = data;
    }, error => {
      console.error('Error fetching weather data', error);
      this.weatherData = null; 
    });
  }
}
