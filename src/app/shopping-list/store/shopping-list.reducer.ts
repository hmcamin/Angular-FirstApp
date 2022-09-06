import {Ingredient} from "../shared/ingredient.model";
import {Action} from "@ngrx/store";
import * as shoppingListActions from './shopping-list.actions'



const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}
export function shoppingListReducer(state = initialState, action: shoppingListActions.ShoppingListActions) {
  switch (action.type){
    case shoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    case shoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    default:
      return {
        ...state
      }

  }
}