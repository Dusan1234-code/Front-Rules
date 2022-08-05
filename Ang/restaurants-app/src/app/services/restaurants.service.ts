import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url = "http://localhost:3000/businesses";
  
  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Restaurant[]>(this.url);
  }

  getRestaurantById(restaurantId: number) {
    return this.http.get<Restaurant>(`${this.url}/${restaurantId}`)
  }


}
