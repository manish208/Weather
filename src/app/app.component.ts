import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Weather App';
  public cityName = 'Noida';
  public weatherData:  any;

  constructor(private WeatherService: WeatherService){
  }

  ngOnInit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(city: string){
    this.WeatherService.getWeather(city).subscribe(
      (data) => {
        console.log('data', data);

        if (!data) {
          // Data not available, show alert
          alert('Please enter a valid city');
        } else {
          // Data is available, handle it accordingly
          this.weatherData = data;
        }
      });

      this.cityName = '';

  }
}
