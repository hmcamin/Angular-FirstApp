import {Ingrediant} from "../shared/ingrediant.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  addIngredientEvent: EventEmitter<Ingrediant[]> = new EventEmitter<Ingrediant[]>();
  private ingredients: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingrediant) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.emit(this.ingredients.slice());
  }
}
