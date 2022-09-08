import {Action} from "@ngrx/store";
import {Recipe} from "../recipe.model";

export const ADD_RECIPE = '[recipe] Add recipe';
export const SET_RECIPES = '[recipe] set recipes';
export const FETCH_RECIPES = '[recipe] fetch recipes';
export const UPDATE_RECIPE = '[recipe] update recipe';
export const DELETE_RECIPE = '[recipe] delete recipe';
export const STORE_RECIPES = '[recipe] store recipes';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: {index: number, newRecipe: Recipe}) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}
export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class StoreRecipes implements Action {
  readonly type= STORE_RECIPES;
}
export type RecipesActions = AddRecipe | SetRecipes | FetchRecipes | UpdateRecipe | DeleteRecipe | StoreRecipes;

