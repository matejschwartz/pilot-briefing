import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBriefingModule } from './modules/flight-briefing/flight-briefing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlightBriefingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
