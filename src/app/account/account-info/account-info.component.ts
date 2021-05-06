import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/classes/user';
import { Location } from '@angular/common';


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
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  // gets the user data from the authentification service and parses the data to the formGroup
  ngOnInit() {
    this.authService.getUser().subscribe(user => this.user = user);
    this.addressForm = this.parseDataToForm(this.user);
  }

  goBack() {
    this.location.back();
  }

  // parses the user Data to the form and returns the filled form object.
  parseDataToForm(user: User): FormGroup {
    const addressForm = this.formBuilder.group({
      numero: this.user.contact.adress.numero,
      rue: this.user.contact.adress.rue,
      codePostal: this.user.contact.adress.codePostal,
      ville: this.user.contact.adress.ville,
      email: this.user.contact.email,
      phone: this.user.contact.phone
    });
    return addressForm;
  }

}
