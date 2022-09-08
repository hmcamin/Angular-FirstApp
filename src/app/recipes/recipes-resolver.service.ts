import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import * as RecipeActions from "./store/recipe.actions";
import {Actions, ofType} from "@ngrx/effects";
import {take, tap} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private recipesService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actoins$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let recipes: Recipe[];
    this.store.select('recipes').pipe(tap(recipeState =>{
      recipes = recipeState.recipes;
    }))

    if (recipes.length === 0) {
      // return this.dataStorageService.fetchRecipes();
      this.store.dispatch(new RecipeActions.FetchRecipes())
      return this.actoins$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
    } else {
      return recipes;
    }
  }
}
