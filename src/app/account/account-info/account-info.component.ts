import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  user: User;
  addressForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
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
