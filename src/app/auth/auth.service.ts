import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  singUp(email: string, password: string){
    return this.http.post('signuplink',{email: email, password: password});
  }

}
