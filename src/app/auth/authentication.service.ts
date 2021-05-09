import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, iif } from 'rxjs';
import { User } from '../classes/user';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { tap, mergeMap, take } from 'rxjs/operators';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user$: Observable<User>;
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  url = '/api/auth';
  USERNAME_SESSION_ATTRIBUTE = '';

  constructor(private http: HttpClient) { }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn$;
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn$.next(isLoggedIn);
  }

  getUser(): Observable<User> {
    return this.user$;
  }

  setUser(user: User) {
    this.user$ = of(user);
  }

  // authenticate request,
  // passing an Authorization header containing encrypted credentials
  // returning the authenticated user
  // and storing credentials in the session storage for future usage
  authenticate(username: number, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ Authorization : 'Basic ' + btoa(username + ':' + password)});
    return this.http.get<User>(this.url + '/user', {headers}).pipe(
      take(1),
      tap(userResponse => {
        if (userResponse !== null) {
          this.setUser(userResponse);
          this.setIsLoggedIn(true);
          sessionStorage.setItem('username', username.toString());
          sessionStorage.setItem('password', password);
        }
      }),
      mergeMap(
        (user: User) => iif(
          () => (user !== null), of(true), of(false)   // if user not null, return true observable, else return false obs
        )
      )
    );
  }

  logOut() {
    this.user$ = null;
    this.isLoggedIn$.next(false);
    sessionStorage.clear();
  }


}
