import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputString: string = '';
  length: number | null = null;

  calculateLength() {
    this.length = this.inputString.length;
  }

}