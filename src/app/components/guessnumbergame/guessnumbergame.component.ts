import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrls: ['./guessnumbergame.component.css']
})
export class GuessnumbergameComponent {
  targetNumber: number = this.getRandomNumber();
  guess: number | null = null;
  message: string = '';

  // Generate a random number between 1 and 100
  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  checkGuess() {
    if (this.guess === null) {
      this.message = 'Please enter a number.';
      return;
    }

    if (this.guess < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.guess > this.targetNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = 'Congratulations! You guessed the number!';
      this.resetGame(); // Optionally reset the game
    }
  }

  // Reset the game by generating a new target number
  resetGame() {
    this.targetNumber = this.getRandomNumber();
    this.guess = null;
  }
}

