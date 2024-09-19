import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolorgenerator',
  templateUrl: './randomcolorgenerator.component.html',
  styleUrls: ['./randomcolorgenerator.component.css']
})
export class RandomcolorgeneratorComponent {
  randomColor: string = '#ffffff';  // Default color

  generateRandomColor() {
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    this.randomColor = randomHex;
  }
}
