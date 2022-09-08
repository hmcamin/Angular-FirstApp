import {Recipe} from "../recipe.model";
import * as RecipesActions from "./recipe.actions";

export interface State {
  recipes: Recipe[]
}

export const initialState: State = {
  recipes: []
}

export function recipeReducer(state = initialState, action: RecipesActions.RecipesActions){
  switch (action.type) {
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      }
    case RecipesActions.UPDATE_RECIPE:
      const oldRecipe = state.recipes[action.payload.index];
      const newRecipe = {
        ...oldRecipe,
        ...action.payload.newRecipe
      };
      const updatedRecipes = [...state.recipes ]
      updatedRecipes[action.payload.index] = newRecipe;
      return {
        ...state,
        recipes: updatedRecipes
      }
    case RecipesActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes.filter((recipe, index)=>{
          return index !== action.payload
        })]
      }
    default:
      return {
        ...state
      }

  }

}
