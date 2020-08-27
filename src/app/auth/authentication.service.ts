import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, iif } from 'rxjs';
import { User } from '../classes/user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, mergeMap, take } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user$: Observable<User>;
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  url = 'http://localhost:8080/library-api/auth/signIn';

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
    return this.http.post<User>(this.url, creds).pipe(
      take(1),
      tap(userResponse => {
        if (!isNull(userResponse)) {
          this.setUser(userResponse);
          this.setIsLoggedIn(true);
        }
      }),
      mergeMap(
        (user: User) => iif(
          () => !isNull(user), of(true), of(false)
        )
      )
    );
  }

  logOut() {
    this.user$ = null;
    this.isLoggedIn$.next(false);
  }

}
