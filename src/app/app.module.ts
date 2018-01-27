import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeaderComponent,
    FiltersComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
