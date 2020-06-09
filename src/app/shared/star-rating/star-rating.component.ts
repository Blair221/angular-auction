import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();  
  constructor() { }

  ngOnChanges(): void {
     this.starWidth = this.rating * 75/5
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating you clicked is ${this.rating}`)
  }
}
