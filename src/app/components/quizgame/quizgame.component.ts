import { Component } from '@angular/core';

@Component({
  selector: 'app-quizgame',
  templateUrl: './quizgame.component.html',
  styleUrls: ['./quizgame.component.css']
})
export class QuizgameComponent {
  question = 'What is the capital of France?';
  options = ['Paris', 'London', 'Berlin', 'Rome'];
  correctAnswer = 'Paris';
  selectedAnswer: string | null = null;
  feedback: string = '';

  submitAnswer() {
    if (this.selectedAnswer === this.correctAnswer) {
      this.feedback = 'Correct!';
    } else {
      this.feedback = 'Wrong answer. Try again!';
    }
  }

  resetQuiz() {
    this.selectedAnswer = null;
    this.feedback = '';
  }
}

