import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {

  name: string = "";
  displayname: string = "";

  show() {
    this.displayname = this.name

  }

}