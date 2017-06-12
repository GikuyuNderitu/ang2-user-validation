import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  user: User = new User();
  pcValidator: RegExp;
  
  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
  }

  updateRegexp() { this.pcValidator = new RegExp(this.user.password); }

}
