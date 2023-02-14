import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCityComponent } from './components/list-city.component';
import { AddCityComponent } from './components/add-city.component';
import { WeatherDetailsComponent } from './components/weather-details.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CitiesRepository } from './services/cities.repo';

@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    AddCityComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CitiesRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
