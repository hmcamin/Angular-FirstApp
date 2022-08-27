import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: './auth.component.html'
})
export class authComponent {
  isLoginMode = true;
  constructor(private authService: AuthService) {

  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if(!form.value){
      return;
    }
    if(this.isLoginMode){
      // ....
    } else {
      this.authService.singUp(form.value.email, form.value.password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
      form.resetForm();
    }

  }
}
