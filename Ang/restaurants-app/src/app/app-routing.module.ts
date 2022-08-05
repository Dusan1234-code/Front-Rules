import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SingleRestaurantComponent } from './restaurants/single-restaurant/single-restaurant.component';

const routes: Routes = [
  {path:"restaurants", component:RestaurantsComponent},
  {path:"restaurants/:id", component:SingleRestaurantComponent},
  {path:"", redirectTo:"restaurants", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
