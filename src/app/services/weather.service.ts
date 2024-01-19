import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../weatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient){  }

  getWeather(cityName: string): Observable<Weather>{
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8422530735fdac62f94df8db1729285e&units=imperial`)
  }
}
