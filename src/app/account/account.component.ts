import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
