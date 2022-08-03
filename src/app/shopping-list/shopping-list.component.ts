import { Component, OnInit } from '@angular/core';

import { Ingrediant } from '../shared/ingrediant.model';
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrediant[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.addIngredientEvent.subscribe((ingredients: Ingrediant[]) =>{
      this.ingredients = ingredients;
    })


  }
}
