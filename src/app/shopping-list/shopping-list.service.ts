import {Ingrediant} from "../shared/ingrediant.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  addIngredientEvent: Subject<Ingrediant[]> = new Subject<Ingrediant[]>();
  private ingredients: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingrediant) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingrediant[]) {
    this.ingredients.push(...ingredients);
    this.addIngredientEvent.next(this.ingredients.slice());
  }

}
