import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { AuthenticationService } from './auth/authentication.service';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { httpInterceptorProviders } from 'src';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AcceuilComponent,
    LoginDialogComponent,
    AdvancedSearchComponent
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
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
