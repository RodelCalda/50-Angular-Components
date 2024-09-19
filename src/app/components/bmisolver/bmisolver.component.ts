import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrls: ['./bmisolver.component.css']
})
export class BmisolverComponent {
  height: number = 0;  // Height in meters
  weight: number = 0;  // Weight in kilograms
  bmi: number | null = null;  // BMI result

  calculateBMI() {
    if (this.height > 0 && this.weight > 0) {
      this.bmi = this.weight / (this.height * this.height);
    } else {
      this.bmi = null;  // Handle invalid input
    }
  }
}

