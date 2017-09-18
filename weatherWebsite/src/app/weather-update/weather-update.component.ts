import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherUpdateService } from '../weather-update/weather-update.service';
@Component({
  selector: 'app-weather-update',
  templateUrl: './weather-update.component.html',
  styleUrls: ['./weather-update.component.css'],
  providers:[WeatherUpdateService]
})
export class WeatherUpdateComponent{
@Input() favupdate: any;
         updatedata:string;

  constructor(private updateweatherservice: WeatherUpdateService) { }
  	refer:any;

  updateweather(favouriteweather: any){
	this.updateweatherservice.updateweatherdata(favouriteweather,this.updatedata)
	.subscribe(data=>this.refer=data);
  console.log(this.updatedata);
	//alert("success");
}
}
