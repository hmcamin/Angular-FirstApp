import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class RecipeService {
  selectRecipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  private selectedRecipe: Recipe;
  getRecipes(){
    return this.recipes.slice();
  }
  selectRecipe(rec: Recipe) {
    this.selectedRecipe = rec;
  }
  getSelectedRecipe() {
    return this.selectedRecipe;
  }
}
