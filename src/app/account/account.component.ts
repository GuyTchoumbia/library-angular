import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { AuthentificationService } from '../authentification.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User;
  addressForm;

  constructor(
    private authService:AuthentificationService,
    private formBuilder: FormBuilder
  ) {
      this.authService.getUser().subscribe(user => this.user = user);
      this.addressForm = this.formBuilder.group({
        numero: this.user.address.numero,
        rue: this.user.address.rue,
        codePostal: this.user.address.codePostal,
        ville: this.user.address.ville,
        phone: this.user.phone
      })
  }

  ngOnInit() {
    
  }

}
