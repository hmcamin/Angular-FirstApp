import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  text: string;
  id: number;
  form: FormGroup;
  recipe: Recipe;
  editMode: boolean;
  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService, private route: Router) {
  }
  ngOnInit() {
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.editMode = this.id != null;
      this.initForm();
    })
  }
  get controls(){
    return (<FormArray>this.form.get('ingredients')).controls;
  }
  initForm(){
    if(this.editMode){
      this.recipe = this.recipeService.getRecipesAt(this.id);
      this.form = new FormGroup({
        'name': new FormControl(this.recipe.name, Validators.required) ,
        'description': new FormControl(this.recipe.description, Validators.required) ,
        'imagePath': new FormControl(this.recipe.imagePath, Validators.required) ,
        'ingredients': new FormArray([])
      })
      for(let ingredient of this.recipe.ingredients) {

        const control = new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount,[
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)]
          )
        });
        (<FormArray>this.form.get('ingredients')).push(control);
      }
    } else{
      this.form = new FormGroup({
        'name': new FormControl(null, Validators.required) ,
        'description': new FormControl(null, Validators.required) ,
        'imagePath': new FormControl(null, Validators.required) ,
        'ingredients': new FormArray([])
      })
    }
  }
  onAddIngredient(){
    (<FormArray>this.form.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }
  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.form.value)
    } else {
      this.recipeService.addRecipe(this.form.value)
    }
    this.onCancel();
  }
  onCancel(){
    this.route.navigate(['../../'],{relativeTo: this.activeRoute});
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }
}
