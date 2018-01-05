import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherService } from './weather/weather.service';
import { ProfileService } from './profile/profile.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
