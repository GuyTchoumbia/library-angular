import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../authentification.service';
import { User } from '../../classes/user';

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
