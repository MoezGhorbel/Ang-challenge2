import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = 'toto';
  email: string = 'toto@fivepoints.fr';
  address: string = 'rue de la bourse lac2';
  hobbies: string[] = ['Music', 'Movies', 'Sports'];
  // hobby!: string;
  // chose!: number;
  showHobbies: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  removeHobby(index: number) {
    this.hobbies.splice(index, 1);
    console.log(this.hobbies);
  }

  // add() {
  //   this.hobbies.push(this.hobby);
  // }
  
  // remove2() {
  //   this.hobbies.splice(this.chose - 1, 1);
  //   this.showHobbies = true;
  // }
}
