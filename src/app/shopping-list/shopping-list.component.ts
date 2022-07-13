import { Component, OnInit } from '@angular/core';
import { Ingrediant } from "../shared/ingrediant.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('ingrediant1',10),
    new Ingrediant('ingrediant2',20)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
