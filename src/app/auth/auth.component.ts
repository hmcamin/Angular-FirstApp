import {Component, ComponentFactoryResolver, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null;
  authObs: Observable<User>;
  @ViewChild(PlaceholderDirective,{static: false}) alertHost: PlaceholderDirective;
  constructor(private authService: AuthService, private router: Router, private compFactoryRed: ComponentFactoryResolver) {

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
      this.showError(errorMessage)
      this.isLoading = false;
    });

  }
  showError(message: string){
    this.error = message ;

  }
  onErrorHandler(){
    this.error = null;
    const alertCompFact = this.compFactoryRed.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    hostViewContainerRef.createComponent(alertCompFact);
  }
}
