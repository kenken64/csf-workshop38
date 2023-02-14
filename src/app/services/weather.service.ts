import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { City } from '../model/City';
import { CitiesRepository } from './cities.repo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient, private citiesRepo: CitiesRepository) { }

  getWeather(city: string , apiKey: string): Promise<any>{
    const params = new HttpParams()
      .set("q", city)
      .set("appid", apiKey);

    return lastValueFrom(this.httpClient
        .get(environment.openweather_api_url, {params: params}))
  }

  addCity(city: City){
    this.citiesRepo.addCity(city);
  }

}
