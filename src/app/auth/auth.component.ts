import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
  isLoginMode = true;
  isLoading = false;
  error = null;
  authObs: Observable<User>;
  @ViewChild(PlaceholderDirective,{static: false}) alertHost: PlaceholderDirective;
  closeSub: Subscription;
  constructor(private authService: AuthService, private router: Router, private compFactoryRef: ComponentFactoryResolver) {

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
    const alertCompFact = this.compFactoryRef.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCompFact);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
  onErrorHandler(){
    this.error = null;
  }
  ngOnDestroy() {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
}
