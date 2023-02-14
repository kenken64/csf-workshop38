import { Component, OnInit } from '@angular/core';
import { CitiesRepository } from '../services/cities.repo';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit{
  
  cities: any;
  
  constructor(private weatherSvc: WeatherService,
    private citiesRepo : CitiesRepository){

  }

  async ngOnInit(): Promise<void> {
      this.cities = await this.citiesRepo.getAllCities();
  }

}
