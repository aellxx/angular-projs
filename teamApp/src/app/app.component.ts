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
  errorMsg = "";
  numberOfTeams: number | "" = "";

  /* functions to manipulate state */
  
  // click event: adds new member to array of members
  addNewMember = () => {
    if (!this.newMember) {
      this.errorMsg = "Please add a name";
    } else {
      // add new member to array
      this.memberArray.push(this.newMember);
      // clear input and error error message
      this.newMember = this.errorMsg = "";
    }
  }

  // input event: changes state of newMember whenever textbox is changed
  onInputName = (member: string) => {
    this.newMember = member; 
    // console.log(this.newMember);
  }

  onEnterNumberOfTeams = (numberOfTeams: string) => {
    this.numberOfTeams = Number(numberOfTeams);
  }

  generateTeams = () => {
    if (this.numberOfTeams === 0) {
      this.errorMsg = `You can't generate 0 teams with ${this.memberArray.length} people. Try again.`;
    } else {
      // generate random teams
      for (let i=0; i < this.memberArray.length; ++i){
        
      }

      // clear input field and error msg
      this.numberOfTeams = 0;
      this.errorMsg = "";
    }
  }
  
}
