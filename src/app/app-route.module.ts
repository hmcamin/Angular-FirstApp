import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id/detail', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shoppingList', component: ShoppingListComponent, children:[
      { path: 'edit', component: ShoppingEditComponent },
    ]
  },
  {path: '**', redirectTo: ''}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouteModule {

}