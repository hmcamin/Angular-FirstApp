import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  singUp(email: string, password: string){
    return this.http.post<string>('signupLink',{email: email, password: password})
      .pipe(catchError(this.handleError));
  }
  login(email: string, password: string) {
    return this.http.post<string>('loginRequestLink',{email: email, password: password})
      .pipe(catchError(this.handleError));
  }
  private handleError(errorRes: HttpErrorResponse){
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
