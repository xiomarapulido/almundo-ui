import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

import { HotelsService } from '../../services/hotels.service';
import { Hotel } from '../../models/Hotel';
import { CommunicationService } from '../../services/communications.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewHotelComponent } from '../view-hotel/view-hotel.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  entryComponents: [ViewHotelComponent]
})
export class HotelsComponent implements OnInit, OnDestroy {

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer;
  componentRef: ComponentRef<any>;
  
  hotels: Array<Hotel>;
  subscription: any;

  constructor(private hotelsService: HotelsService,
    private communicationService: CommunicationService,
    private resolver: ComponentFactoryResolver) {
    this.hotels = [];
  }

  ngOnInit() {
    this.getHotels();
    this.subscription = this.communicationService.$loadHotels.subscribe(({ id, name, stars }) => {
      this.getHotels(name, stars, id);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  viewHotel(id: string) {
    this.modalContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(ViewHotelComponent);
    this.componentRef = this.modalContainer.createComponent(factory);
    this.componentRef.instance.id = id;
  }

  getHotels(name?, stars?, id?) {

    this.hotelsService.getHotelsFilter(name, stars, id)
      .subscribe((res) => { this.hotels = res['data']; });

  }

}
