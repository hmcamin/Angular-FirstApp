import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: './auth.component.html'
})
export class authComponent {
  isLoginMode = true;
  isLoading = false;
  error = null;
  authObs: Observable<string>;
  constructor(private authService: AuthService) {

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
    }, errorMessage => {
      this.error = errorMessage ;
    });

  }
}
