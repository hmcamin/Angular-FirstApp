import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params)=>{
      this.index = +param['id'];
      this.recipe = this.recipeService.getRecipesAt(this.index);

    })

  }
  toAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingLIst(this.recipe.ingredients);
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.index);
  }

}
