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
  constructor(private shoppingLIstService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingLIstService.selectIngredientEvent.subscribe((ingredient: Ingredient)=>{
      this.editMode = true;
      this.form.setValue({
        'name': ingredient.name,
        'amount': ingredient.amount
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
      this.shoppingLIstService.getIngredient(newIngredient).name = value.name;
      this.shoppingLIstService.getIngredient(newIngredient).amount = value.amount;

    } else{
      this.shoppingLIstService.addIngredient(newIngredient);
    }
  }
}
