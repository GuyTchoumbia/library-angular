import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { AuthentificationService } from '../authentification.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User;
  addressForm: FormGroup;

  constructor(
    private authService: AuthentificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.user = user);
    this.addressForm = this.formBuilder.group({
        numero: this.user.contact.adress.numero,
        rue: this.user.contact.adress.rue,
        codePostal: this.user.contact.adress.codePostal,
        ville: this.user.contact.adress.ville,
        email: this.user.contact.email,
        phone: this.user.contact.phone
      });
  }
}
