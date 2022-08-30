import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, tap, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "./user.model";

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {
  }
  singUp(email: string, password: string){
    return this.http.post<User>('signupLink',{email: email, password: password})
      .pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(resData.email, resData.id, resData.token, new Date().getTime() + 24*60*60*1000)
      }));
  }
  login(email: string, password: string) {
    return this.http.post<User>('loginRequestLink',{email: email, password: password})
      .pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(resData.email, resData.id, resData.token, new Date().getTime() + 24*60*60*1000)
      }));
  }
  private handleAuthentication(email: string, id: number, token: string, expireIn: number){
    const exDate = new Date(new Date().getTime() + expireIn*1000);
    const user = new User(email, id, token, exDate);
    this.user.next(user);
  }
  private static handleError(errorRes: HttpErrorResponse){
    let errorMessage = "and error occurred!";
    if(errorRes.error || errorRes.error.error){
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'Email exists!';
    }
    return throwError(errorMessage);
  }
}
