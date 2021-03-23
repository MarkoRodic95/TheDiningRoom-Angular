import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
  }
}
