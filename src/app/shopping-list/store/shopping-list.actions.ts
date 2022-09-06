import {Action} from "@ngrx/store";
import { Ingredient } from '../../shared/ingredient.model';
import {Ingredient} from "../shared/ingredient.model";

export const ADD_INGREDIENT = '[shoppingList] add ingredient';
export const ADD_INGREDIENTS = '[shoppingList] add ingredients';
export const UPDATE_INGREDIENT = '[shoppingList] update ingredient';
export const DELETE_INGREDIENT = '[shoppingList] delete ingredient';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}
export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]) {}
}
export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: { index: number, ingredient: Ingredient }) {}
}
export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public payload: number) {}
}
export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient;
