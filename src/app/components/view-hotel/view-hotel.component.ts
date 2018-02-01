import { Component, OnInit, Input } from '@angular/core';

import { HotelsService } from '../../services/hotels.service';
import { Hotel } from '../../models/Hotel';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit, AfterViewInit {


  @Input() id: string;

  hotel: any;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.filterHotelsById();
  }

  ngAfterViewInit() {
    document.getElementById('div-click-modal').click();
  }

  filterHotelsById() {
    this.hotelsService.getHotelsFilter(null, [], this.id)
      .subscribe((res) => {
        const [hotel] = res['data'];
        this.hotel = hotel;
      });
  }



}
