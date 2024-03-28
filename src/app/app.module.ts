import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navbar/header/header.component';
import { HomeComponent } from './navbar/pages/home/home.component';
import { SearchComponent } from './navbar/pages/search/search.component';
import { TagComponent } from './navbar/pages/tag/tag.component';
import { FoodPageComponent } from './navbar/pages/food-page/food-page.component';
// import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
