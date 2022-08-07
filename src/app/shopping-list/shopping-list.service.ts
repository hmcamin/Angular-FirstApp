import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  addIngredientEvent: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  selectIngredientEvent: Subject<Ingredient> = new Subject<Ingredient>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(ingredient: Ingredient){
    return this.ingredients.find(ing =>{
      return ing.name = ingredient.name;
    })
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredientEvent.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addIngredientEvent.next(this.ingredients.slice());
  }
  selectIngredient(ingredient: Ingredient){
    this.selectIngredientEvent.next(ingredient);

  }
}
