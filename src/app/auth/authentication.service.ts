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
  url = apiUrl + 'auth';
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

  logIn(username: number, password: string): Observable<boolean> {
    const creds = new User();
    creds.id = username;
    creds.password = password;
    return this.http.post<User>(this.url + '/signIn', creds).pipe(
      take(1),
      tap(userResponse => {
        if (userResponse !== null) {
          this.setUser(userResponse);
          this.setIsLoggedIn(true);
        }
      }),
      mergeMap(
        (user: User) => iif(
          () => (user !== null), of(true), of(false)   // if user not null, return true observable, else return false obs
        )
      )
    );
  }

  authenticate(username: number, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ Authorization : 'Basic ' + btoa(username + ':' + password)});
    // tslint:disable-next-line: deprecation
    return this.http.get(this.url + '/user', {headers}).pipe(
      take(1),
      tap(userResponse => {
        if (userResponse !== null) {
          console.log(userResponse);
          this.setIsLoggedIn(true);
        }
      }),
      mergeMap(
        (user: User) => iif(
          () => (user !== null), of(true), of(false)   // if user not null, return true observable, else return false obs
        )
      )
    );
  }

  storeInSessionStorage(username, password) {
  sessionStorage.setItem(this.USERNAME_SESSION_ATTRIBUTE, username);
  }


  logOut() {
    this.user$ = null;
    this.isLoggedIn$.next(false);
  }

}
