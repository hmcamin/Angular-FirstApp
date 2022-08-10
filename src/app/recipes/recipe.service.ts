import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  updateRecipesEvent = new Subject<Recipe[]>();
  constructor(private shoppingLIstService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('apple',10), new Ingredient('tomato',5)]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('banana',20), new Ingredient('orange',15)])
  ];
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipesAt(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingLIst(ingredients: Ingredient[]) {
    this.shoppingLIstService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.updateRecipesEvent.next(this.getRecipes());
  }
  updateRecipe(index: number,recipe: Recipe){
    this.recipes[index] = recipe;
    this.updateRecipesEvent.next(this.getRecipes());
  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.updateRecipesEvent.next(this.getRecipes());
  }
}
