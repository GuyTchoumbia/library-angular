import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { AuthentificationService } from 'src/app/authentification.service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css']
})
export class AccountMainComponent implements OnInit {
  user: User;

  constructor(private authService: AuthentificationService) {
    this.authService.getUser().subscribe(user => this.user = user);
   }

  ngOnInit() {
  }

}
