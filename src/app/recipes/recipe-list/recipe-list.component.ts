import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe1','desc1', 'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'),
    new Recipe('recipe2','desc2', 'https://cdn-icons-png.flaticon.com/512/3565/3565418.png')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
