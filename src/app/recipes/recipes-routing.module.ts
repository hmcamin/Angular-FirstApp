import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipesResolverService} from "./recipes-resolver.service";
import {AuthComponent} from "../auth/auth.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'recipe', component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id/detail', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
      { path: 'auth', component: AuthComponent}
    ]
  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RecipesRoutingModule{

}
