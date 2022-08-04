import {Component, OnDestroy, OnInit} from '@angular/core';

import { Ingrediant } from '../shared/ingrediant.model';
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingrediant[] = [];
  addIngredientSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.addIngredientSubscription = this.shoppingListService.addIngredientEvent.subscribe((ingredients: Ingrediant[]) =>{
      this.ingredients = ingredients;
    })
  }
  ngOnDestroy() {
    this.addIngredientSubscription.unsubscribe();
  }
}
