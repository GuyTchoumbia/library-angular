import { Injectable } from '@angular/core';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';
import { User } from './classes/user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Authority } from './classes/authority';
import { Credentials } from './classes/credentials';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private user = new BehaviorSubject<User>(undefined);
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  url = 'http://localhost:8080/library-api/auth/signIn';

  constructor(private http: HttpClient) { }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  getUser(): BehaviorSubject<User> {
    return this.user;
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn);
  }

  setUser(user: User) {
    this.user.next(user);
  }

  logIn(username: string, password: string): Observable<HttpResponse<User>> {
    const creds = new Credentials(username, password, Authority.ANO);
    return this.http.post<User>(this.url, creds, {observe: 'response'});
  }

  logOut() {
    this.user.next(undefined);
    this.isLoggedIn.next(false);
  }

}
