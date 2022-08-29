import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  singUp(email: string, password: string){
    return this.http.post<string>('signupLink',{email: email, password: password})
      .pipe(catchError(errorRes => {
        let errorMessage = "and error occurred!";
        if(errorRes.error || errorRes.error.error){
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message){
          case 'EMAIL_EXISTS':
            errorRes = 'Email exists!';
        }
        return throwError(errorMessage);
    }));
  }
  login(email: string, password: string) {
    return this.http.post<string>('loginRequestLink',{email: email, password: password});
  }
}
