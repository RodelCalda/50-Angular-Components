import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrls: ['./wordcounter.component.css']
})
export class WordcounterComponent {
  inputText: string = '';
  wordCount: number | null = null;

  countWords() {
    if (this.inputText.trim()) {
      this.wordCount = this.inputText.trim().split(/\s+/).length;
    } else {
      this.wordCount = 0;
    }
  }
}

