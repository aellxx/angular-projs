import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // states
  newMember = "";
  memberArray: string[] = [];

  // functions to manipulate state
  addNewMember = () => {
    this.memberArray.push(this.newMember);
  }
}
