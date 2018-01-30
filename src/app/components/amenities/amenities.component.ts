import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {

  @Input() amenitie: string[];

  splitElementeImage: string[];


  amenitieImage: any = '';

  constructor() { }

  ngOnInit() {

    this.amenitieImage = `${this.amenitie.toString()},`;

    this.amenitieImage = this.amenitieImage.replace(/,/g, '.svg,');

    this.splitElementeImage = this.amenitieImage.substring(0, this.amenitieImage.length - 1).split(',');

  }

}
