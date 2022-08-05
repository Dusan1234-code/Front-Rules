import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Categories, Restaurant } from '../models/restaurant.model';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})

export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[]= [];



  constructor(private service: RestaurantsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (ele: Restaurant[])=> {
        this.restaurants = ele;

      }
    )
  }


}
