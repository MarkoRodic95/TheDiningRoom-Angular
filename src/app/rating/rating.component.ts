import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() imageFull: string;
  @Input() imageEmpty: string;
  @Input() countFull: number;

  arrayFull: any[];
  arrayEmpty: any[];
  constructor() { }

  ngOnInit(): void {
    this.arrayFull = new Array(this.countFull);
    this.arrayEmpty = new Array(5 - this.countFull)
  }

}
