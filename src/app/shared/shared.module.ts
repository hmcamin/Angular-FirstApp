import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {headerDirective} from "./header.directive";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    AlertComponent,
    headerDirective,
    PlaceholderDirective
  ],
  imports:[
    CommonModule,
  ],
  exports: [
    AlertComponent,
    headerDirective,
    PlaceholderDirective,
    CommonModule
  ]
})
export class SharedModule{

}
