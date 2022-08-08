import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit{
  text: string;
  id: number;
  form: FormGroup;
  recipe: Recipe;
  editMode: boolean;
  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) {
  }
  ngOnInit() {
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.editMode = this.id != null;
      this.initForm();
    })
  }
  initForm(){
    if(this.editMode){
      this.recipe = this.recipeService.getRecipesAt(this.id);
      this.form = new FormGroup({
        'name': new FormControl(this.recipe.name) ,
        'imageUrl': new FormControl(this.recipe.imagePath) ,
        'description': new FormControl(this.recipe.description) ,
        'ingredients': new FormArray([])
      })
      for(let ingredient of this.recipe.ingredients) {

        const control = new FormGroup({
          'name': new FormControl(ingredient.name),
          'amount': new FormControl(ingredient.amount)
        });
        (<FormArray>this.form.get('ingredients')).push(control);
      }
    } else{
      this.form = new FormGroup({
        'name': new FormControl(null) ,
        'imageUrl': new FormControl(null) ,
        'description': new FormControl(null) ,
        'ingredients': new FormArray([])
      })
    }
  }
}
