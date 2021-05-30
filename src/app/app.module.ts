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
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { AuthenticationService } from './auth/authentication.service';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { XhrInterceptor } from './interceptors/xhr.interceptor';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './constants';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LoginDialogComponent,
    ConfirmDialogComponent,
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
    MatProgressBarModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],
  entryComponents: [
    LoginDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
