import {
  Component, OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  updateIngredient: Ingredient;
  updateIndex: number;
  constructor(private shoppingLIstService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingLIstService.selectIngredientEvent.subscribe((index: number)=>{
      this.editMode = true;
      this.updateIngredient = this.shoppingLIstService.getIngredient(index);
      this.updateIndex = index;
      this.form.setValue({
        'name': this.updateIngredient.name,
        'amount': this.updateIngredient.amount
      });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(){
    const value = this.form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.updateIngredient.name = value.name;
      this.updateIngredient.amount = value.amount;
      this.editMode = false;
    } else{
      this.shoppingLIstService.addIngredient(newIngredient);
    }
    this.form.reset();
  }
  onClear() {
    this.form.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingLIstService.removeIngredient(this.updateIndex);
    this.onClear();
  }
}
