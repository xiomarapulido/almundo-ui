import { Component, OnInit } from '@angular/core';

import { HotelsService } from '../../services/hotels.service';
import { CommunicationService } from '../../services/communications.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public stars = {};

  starsFilter: Array<number>;
  indexArray: any;
  nameHotel: string;

  constructor(private hotelsService: HotelsService,
    private communicationService: CommunicationService) {

    this.starsFilter = [];
    this.stars = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      all: false
    }
  }

  ngOnInit() {
  }

  public filterStarsHotels($event: any, stars: any) {

    if (Array.isArray(stars) && $event) {
      this.starsFilter = stars;
      Object.keys(this.stars).map((key) => this.stars[key] = true)
    } else if (Array.isArray(stars) && !$event) {
      this.starsFilter = [];
      Object.keys(this.stars).map((key) => this.stars[key] = false)
    } else if ($event && !this.starsFilter.includes(stars)) {
      this.starsFilter.push(stars);
    } else {
      this.stars['all'] = false;
      this.starsFilter = this.starsFilter.filter(star => star !== stars)
    }
    this.filterHotels();
  }

  public filterHotels() {
    this.communicationService.getHotelsWithParams(null, this.nameHotel, this.starsFilter)
  }

}
