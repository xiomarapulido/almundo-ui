import { Component, OnInit } from '@angular/core';

import { HotelsService } from '../../services/hotels.service'
import { Hotel } from '../../models/interfaces';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    //this.hotelsService.getHotelsFilter().subscribe((({ success, data }) => { this.hotels = data; console.log(this.hotels);}));
    this.hotelsService.getHotelsFilter().subscribe((data => { this.hotels = data; }));
  }

}
