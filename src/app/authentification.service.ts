import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isLoggedIn: Boolean = false;
  obsIsLoggedIn = observableOf(this.isLoggedIn);
  constructor() { }  

  logIn(): void {
    /*TODO*/
    this.isLoggedIn = true;
    console.log("Logged In");
    console.log(this.isLoggedIn);     
  }

  logOut(): void {
    this.isLoggedIn = false;
    console.log("Logged Out");
    console.log(this.isLoggedIn);
  } 
}
