import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  time: number = 0; 
  remainingTime: number = 0; 
  intervalId: any; 
  isCounting: boolean = false; 

  startTimer() {
    if (this.time > 0 && !this.isCounting) {
      this.isCounting = true;
      this.remainingTime = this.time;
      this.intervalId = setInterval(() => {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.isCounting = false;
  }

  resetTimer() {
    this.stopTimer();
    this.remainingTime = 0;
    this.time = 0;
  }
}

