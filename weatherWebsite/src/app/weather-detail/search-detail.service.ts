import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchDetailService {
	constructor(private _http : Http) {
	}
	saveData( weather:any,cityname:string,) : Observable<any> {
		const url: string ="http://localhost:8000/users";
			var CombineData: any ={};
					CombineData.city=cityname;
					CombineData.date=weather.date;
					CombineData.max_temp=weather.day.maxtemp_c;
					CombineData.min_temp=weather.day.mintemp_c;
					CombineData.humidity=weather.day.avghumidity;
					CombineData.Description=weather.day.condition.text;
					console.log(CombineData);

					return this._http
					.post(url,CombineData)
					.map((res:Response)=> <any[]>res.json());

	}
	
}


