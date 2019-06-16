import { Injectable } from '@angular/core';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isLoggedIn = false;
  subject = new BehaviorSubject<boolean>(this.isLoggedIn);
  constructor() { }

  getIsLoggedIn(): Observable<boolean> {
    return this.subject.asObservable();
  }

  logIn(): void {
    /*TODO*/
    this.isLoggedIn = true;
    this.subject.next(this.isLoggedIn);
  }

  logOut(): void {
    this.isLoggedIn = false;
    this.subject.next(this.isLoggedIn);
  }
}
