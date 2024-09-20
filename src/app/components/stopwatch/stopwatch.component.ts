import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  private timer: any;
  public elapsedTime: number = 0;  // in seconds
  public running: boolean = false;

  start() {
    if (!this.running) {
      this.running = true;
      this.timer = setInterval(() => {
        this.elapsedTime++;
      }, 1000);
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.timer);
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
  }

  formatTime(): string {
    const minutes: number = Math.floor(this.elapsedTime / 60);
    const seconds: number = this.elapsedTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
