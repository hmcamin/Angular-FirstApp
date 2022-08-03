import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit{
  text: string;
  id: number;
  constructor(private activeRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = param['id'];
      if(this.id){
        this.text = "we have an ID"
      } else{
        this.text = "New Recipe is going to be added"
      }
    })
  }
}
