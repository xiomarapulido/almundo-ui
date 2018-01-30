import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BodyComponent } from './components/body/body.component';
import { HotelsService } from './services/hotels.service';
import { HttpClientModule } from '@angular/common/http';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeaderComponent,
    FiltersComponent,
    BodyComponent,
    StarsRatingComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
