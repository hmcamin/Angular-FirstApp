import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingrediant} from "../shared/ingrediant.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingLIstService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingrediant('apple',10), new Ingrediant('tomato',5)]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingrediant('banana',20), new Ingrediant('orange',15)])
  ];
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipesAt(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingLIst(ingredients: Ingrediant[]) {
    this.shoppingLIstService.addIngredients(ingredients);

  }
}
