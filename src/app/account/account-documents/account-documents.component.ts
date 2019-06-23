import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification.service';
import { Document } from '../../classes/document';

@Component({
  selector: 'app-account-documents',
  templateUrl: './account-documents.component.html',
  styleUrls: ['./account-documents.component.css']
})
export class AccountDocumentsComponent implements OnInit {
  userDocuments: Document[];

  constructor(private authService: AuthentificationService) {
    this.authService.getUser().subscribe(user => this.userDocuments = user.documents);
   }

  ngOnInit() {
  }

}
