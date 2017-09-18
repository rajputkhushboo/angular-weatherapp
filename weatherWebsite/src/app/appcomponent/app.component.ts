import { Component } from '@angular/core';
import { WeatherService } from '../weather-search/weather.service';

@Component({
	selector: 'app-root',
	templateUrl:"./app.component.html",
	providers:[WeatherService]
})
export class AppComponent {
	title = 'Weather Forcast';

}
