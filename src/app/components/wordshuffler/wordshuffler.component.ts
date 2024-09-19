import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrls: ['./wordshuffler.component.css']
})
export class WordshufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';

  // Function to shuffle the letters in a word
  shuffleWord(word: string): string {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]]; // Swap letters
    }
    return letters.join('');
  }

  // Method to shuffle the input word
  shuffleInputWord() {
    if (this.inputWord) {
      this.shuffledWord = this.shuffleWord(this.inputWord);
    }
  }
}
