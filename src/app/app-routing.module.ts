import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/pages/home/home.component';
import { TagComponent } from './navbar/pages/tag/tag.component';
import { FoodPageComponent } from './navbar/pages/food-page/food-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
