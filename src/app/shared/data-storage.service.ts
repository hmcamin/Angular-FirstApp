import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

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
    return this.http.get<Recipe[]>('url').subscribe(data =>{
      this.recipe.setRecipes(data);
    }, error =>{
      console.log(error);
    });
  }

}
