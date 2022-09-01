import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null;
  authObs: Observable<User>;
  constructor(private authService: AuthService, private router: Router) {

  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    this.isLoginMode = true;
    if(!form.value){
      return;
    }
    if(this.isLoginMode){
      this.authObs = this.authService.login(form.value.email, form.value.password);
    } else {
      this.authObs = this.authService.singUp(form.value.email, form.value.password);
      form.resetForm();
    }
    this.authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorMessage => {
      this.error = errorMessage ;
      this.isLoading = false;
    });

  }
}
