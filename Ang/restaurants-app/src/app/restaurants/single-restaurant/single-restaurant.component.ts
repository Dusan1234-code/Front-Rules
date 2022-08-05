import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.scss']
})
export class SingleRestaurantComponent implements OnInit {
  restaurantId: number = NaN;
  restaurant: Restaurant = new Restaurant();

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.restaurantId = params['id'];
      this.getSingleRestaurant();
    });
  }

  getSingleRestaurant() {
    this.service.getRestaurantById(this.restaurantId).subscribe((ele: Restaurant)=>{
      this.restaurant = ele;
    })
  }

}
