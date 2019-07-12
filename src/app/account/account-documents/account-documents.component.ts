import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../authentification.service';
import { UserCote } from '../../classes/userCote';

@Component({
  selector: 'app-account-documents',
  templateUrl: './account-documents.component.html',
  styleUrls: ['./account-documents.component.css']
})
export class AccountDocumentsComponent implements OnInit {
  userDocuments: UserCote[];

  constructor(private authService: AuthentificationService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.userDocuments = user.userCotes.filter(element => element.dateEmprunt != null));
  }

}
