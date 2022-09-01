import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {path: '**', redirectTo: ''}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouteModule {

}
