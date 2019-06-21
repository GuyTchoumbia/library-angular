import { Injectable } from '@angular/core';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';
import { User } from './classes/user';
import { USER } from './mockup lists/fake-user';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user: User = USER;
  isLoggedIn = false;
  subject = new BehaviorSubject<boolean>(this.isLoggedIn);
  constructor() { }

  getIsLoggedIn(): Observable<boolean> {
    return this.subject.asObservable();
  }

  getUser(): Observable<User> {
    return observableOf(this.user);
  }

  logIn(): void {
    /*TODO*/
    // this.user = subscribe....
    this.isLoggedIn = true;
    this.subject.next(this.isLoggedIn);
  }

  logOut(): void {
    this.isLoggedIn = false;
    this.subject.next(this.isLoggedIn);
  }
}
