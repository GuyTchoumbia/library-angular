import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from '../../classes/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css']
})
export class AccountMainComponent implements OnInit {
  user: User;

  constructor(private authService: AuthenticationService,
              private location: Location) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.user = user);
  }

}
