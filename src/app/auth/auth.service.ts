import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, tap, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  timer: any = null;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
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
  logout(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.timer){
      clearTimeout(this.timer);
    }
    this.timer = null;
  }
  autoLogin(){
    const userData:{
      email: string,
      id: string,
      _token: string,
      _expirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loadedUser = new User(userData.email, +userData.id, userData._token, new Date(userData._expirationDate));
    if(loadedUser.token){
      const timeToExpire = new Date(userData._expirationDate).getTime() - new Date().getTime();
      this.autoLogout(timeToExpire);
      this.authService.user.next(loadedUser);
    }
  }
  autoLogout(expirationDate: number) {
    this.timer = setTimeout(()=>{
      this.logout();
    }, expirationDate);
  }
  private handleAuthentication(email: string, id: number, token: string, expireIn: number){
    const exDate = new Date(new Date().getTime() + expireIn*1000);
    const user = new User(email, id, token, exDate);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(expireIn*1000)
    this.user.next(user);
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
