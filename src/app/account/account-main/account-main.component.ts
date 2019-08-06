import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css']
})
export class AccountMainComponent implements OnInit {
  user: User;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.user = user);
  }

}
