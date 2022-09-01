import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRouteModule} from "./app-route.module";
import {HttpClientModule} from "@angular/common/http";
import {RecipesModule} from "./recipes/recipes.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {SharedModule} from "./shared/shared.module";
import {RecipesRoutingModule} from "./recipes/recipes-routing.module";
import {CoreModule} from "./core.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    RecipesRoutingModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
