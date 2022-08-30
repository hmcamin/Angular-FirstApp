import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import { map, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipe: RecipeService) {
  }
  saveData(){
    return this.http.post('url',{}).subscribe(data =>{
      console.log(data);
    }, error =>{
      console.log(error);
    });
  }
  fetchData(){
    return this.http.get<Recipe[]>('url').pipe(map(recipes =>{
        return recipes.map(recipe =>{
          return {...recipe, ingredients: recipe.ingredients? recipe.ingredients: []};
        })
      }),
      tap(recipes =>{
        this.recipe.setRecipes(recipes);
      }));

  }

}
