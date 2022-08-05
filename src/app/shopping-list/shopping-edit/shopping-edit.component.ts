import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Ingrediant } from '../../shared/ingrediant.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private shoppingLIstService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const value = this.form.value;
    const newIngredient = new Ingrediant(value.name, value.amount);
    this.shoppingLIstService.addIngredient(newIngredient);
  }
}
