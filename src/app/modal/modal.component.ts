import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../model/menu';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() restaurant: Restaurant;
  menu: Menu;
  weekdays = []
  
  constructor(private service:RestaurantService) { }

  ngOnInit(): void {
    this.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
    this.service.getMenu(this.restaurant._id).subscribe(x => {
      this.menu = x;
    })
  }

}
