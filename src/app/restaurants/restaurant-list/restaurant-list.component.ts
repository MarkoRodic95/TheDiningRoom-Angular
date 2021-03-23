import { Component, OnInit } from '@angular/core';
import { RestaurantList } from 'src/app/model/restaurant-list';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  parameters = {
    filter: {
      priceFrom: 0,
      priceTo: 5,
      cuisine: ''
    },
    page: 1,
    pageSize:10
  }

  restaurants: RestaurantList;
  constructor(private service: RestaurantService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      let cuisine = x['cuisine'] == 'all' ? '' : x['cuisine'];
      this.parameters.filter.cuisine = cuisine
      this.updateRestaurants()
    })    
  }
  updateRestaurants() {
    this.service.getAll(this.parameters).subscribe(x=>{
      this.restaurants = x;
    })
  }

  changePage(value) {
    this.parameters.page = value;
    this.updateRestaurants();
  }

}
