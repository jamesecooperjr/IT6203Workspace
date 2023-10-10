import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  buttonClicked: boolean = false;
  buttonName: string = "Button Name";
  firstName: string;

  constructor() {
    this.firstName = ''; 
  }

  buttonClickedHandler() {
    console.log("Button clicked");
  }

  buttonOnMouseOver() {
    console.log("Mouse over button");
  }
}
