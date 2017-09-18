import { Component, Input } from '@angular/core';
import { SearchDetailService } from './search-detail.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent {
@Input() inputdata : any;
  constructor(private weatherService :SearchDetailService) { }
  refer: any;
  getWeatherData( weather : any, cityname: string){
  	this.weatherService.saveData(weather,cityname).subscribe(refer=> this.refer=refer);
  }
}
 