import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherUpdateService {

  constructor(private http: Http) { }

 updateweatherdata(weatherupdate : any, description: string) : Observable<any>{
 //	console.log(description);
 	const updateUrl="http://localhost:8000/"+weatherupdate.date+"/"+weatherupdate.city+"/"+description;
  	//console.log(updateUrl)
 	return this.http

 	.put(updateUrl,weatherupdate)
 	.map((response:Response)=><any[]>response.json());
 }

}
