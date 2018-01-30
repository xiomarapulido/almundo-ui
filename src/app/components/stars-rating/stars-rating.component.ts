import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnInit {

  @Input() stars: number = 0;

  public starsFixed: Array<number> = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
