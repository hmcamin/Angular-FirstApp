import {Recipe} from "../recipe.model";
import {ADD_RECIPE, RecipesActions, SET_RECIPES} from "./recipe.actions";

export interface State {
  recipes: Recipe[]
}

export const initialState: State = {
  recipes: []
}

export function recipeReducer(state = initialState, action: RecipesActions){
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      }
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    default:
      return {
        ...state
      }

  }

}
