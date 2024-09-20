import { Component } from '@angular/core';

@Component({
  selector: 'app-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent {
  moods: string[] = ['Happy', 'Sad', 'Neutral', 'Excited', 'Angry'];
  selectedMood: string = '';
  moodHistory: { mood: string; date: string }[] = [];

  submitMood() {
    if (this.selectedMood) {
      this.moodHistory.push({ mood: this.selectedMood, date: new Date().toLocaleString() });
      this.selectedMood = '';
    }
  }
}

