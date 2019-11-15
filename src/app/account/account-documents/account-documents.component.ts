import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-documents',
  templateUrl: './account-documents.component.html',
  styleUrls: ['./account-documents.component.css']
})
export class AccountDocumentsComponent implements OnInit {
  userDocuments: UserCote[];

  constructor(private authService: AuthenticationService,
              private location: Location) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.userDocuments = user.userCotes.filter(element => element.dateEmprunt != null));
  }

  goBack() {
    this.location.back();
  }

}
