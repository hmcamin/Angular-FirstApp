import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "./recipe.model";
import {Observable} from "rxjs";
import {DataStorageService} from "../shared/data-storage.service";
import {Injectable} from "@angular/core";
import {RecipeService} from "./recipe.service";

@Injectable({providedIn: "root"})
export class RecipesResolverService implements Resolve<Recipe[]>{
  constructor(private storage:DataStorageService, private recipe: RecipeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipe.getRecipes();

    if(recipes.length === 0 ){
      return this.storage.fetchData();
    } else {
      return recipes;

    }
  }
}
