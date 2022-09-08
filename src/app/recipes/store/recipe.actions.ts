import {Action} from "@ngrx/store";
import {Recipe} from "../recipe.model";

export const ADD_RECIPE = '[recipe] add recipe';
export const SET_RECIPES = '[recipe] set recipes';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export type RecipesActions = AddRecipe | SetRecipes;
