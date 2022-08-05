import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SingleRestaurantComponent } from './restaurants/single-restaurant/single-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    SingleRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
