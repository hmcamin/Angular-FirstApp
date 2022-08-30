import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./recipes/recipes-resolver.service";
import {authComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id/detail', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
      { path: 'auth', component: authComponent}
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
