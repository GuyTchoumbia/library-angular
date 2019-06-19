import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { AccountComponent } from './account/account.component'; 
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';  

import { AuthentificationService } from './authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SidebarComponent,
    AcceuilComponent,
    LoginDialogComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
