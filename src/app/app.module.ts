import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BodyComponent } from './components/body/body.component';
import { HotelsService } from './services/hotels.service';
import { HttpClientModule } from '@angular/common/http';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { ViewHotelComponent } from './components/view-hotel/view-hotel.component';
import { CommunicationService } from './services/communications.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeaderComponent,
    FiltersComponent,
    BodyComponent,
    StarsRatingComponent,
    AmenitiesComponent,
    ViewHotelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HotelsService,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
