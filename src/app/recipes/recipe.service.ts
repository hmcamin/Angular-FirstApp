import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
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
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipesAt(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingLIst(ingredients: Ingredient[]) {
    this.shoppingLIstService.addIngredients(ingredients);

  }
}
