import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipe: RecipeService, private authService: AuthService) {
  }
  saveData(){
    return this.http.post('url',{}).subscribe(data =>{
      console.log(data);
    }, error =>{
      console.log(error);
    });
  }
  fetchData(){
    this.authService.user.pipe(take(1), exhaustMap(user => {

      return this.http.get<Recipe[]>('url',
        {
          params: new HttpParams().set('auth',user.token)
        });
    }),map(recipes =>{
        return recipes.map(recipe =>{
          return {...recipe, ingredients: recipe.ingredients? recipe.ingredients: []};
        })
      }),
      tap(recipes =>{
        this.recipe.setRecipes(recipes);
      }));

  }

}
