import {Action} from "@ngrx/store";
import { Ingredient } from '../../shared/ingredient.model';
import {Ingredient} from "../shared/ingredient.model";

export const ADD_INGREDIENT = '[shoppingList] add ingredient'

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}
