import { Component } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent {
  colors: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink'];
  selectedColor: string = '';

  selectColor(color: string) {
    this.selectedColor = color;
  }
}
