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
import {map, take} from "rxjs/operators";
import {of, switchMap} from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private recipesService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actoins$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('recipes').pipe(
      take(1),
      map(recipeState =>{
      return recipeState.recipes;
      }),
      switchMap(recipes =>{
        if (recipes.length === 0) {
          this.store.dispatch(new RecipeActions.FetchRecipes())
          return this.actoins$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
        } else {
          return of(recipes);
        }
      })
    )
  }
}
