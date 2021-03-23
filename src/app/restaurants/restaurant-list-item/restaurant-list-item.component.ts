import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    const modalRef = this.modal.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.restaurant = this.restaurant;
  }

}
