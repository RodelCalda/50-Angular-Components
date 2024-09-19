import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrls: ['./charactercounter.component.css']
})
export class CharactercounterComponent {
  inputText: string = '';
  charCount: number = 0;

  updateCharCount() {
    this.charCount = this.inputText.length;
  }
}

