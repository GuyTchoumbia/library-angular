import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthentificationService } from 'src/app/authentification.service';
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
    private authService: AuthentificationService,
    private formBuilder: FormBuilder
  ) {
      this.authService.getUser().subscribe(user => this.user = user);
      this.addressForm = this.formBuilder.group({
        numero: this.user.address.numero,
        rue: this.user.address.rue,
        codePostal: this.user.address.codePostal,
        ville: this.user.address.ville,
        email: this.user.email,
        phone: this.user.phone
      });
  }

  ngOnInit() {
  }

}
