import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrls: ['./palindromechecker.component.css']
})
export class PalindromecheckerComponent {
  word: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const reversedWord = this.word.split('').reverse().join('');
    this.isPalindrome = this.word === reversedWord;
  }
}
