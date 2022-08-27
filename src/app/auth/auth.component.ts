import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: './auth.component.html'
})
export class authComponent {
  isLoginMode = true;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm){
    form.resetForm();
  }
}
