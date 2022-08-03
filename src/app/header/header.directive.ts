import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[dropDownDir]'
})
export class headerDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') mouseClick() {
    this.isOpen = !this.isOpen;
  }
}
