import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FavouritesService {
	private url: string ="http://localhost:8000";
	constructor(private _http : Http) {
	}

	DisplayData() : Observable<any> {
		
		return this._http
		.get(this.url)
		.map((res:Response)=> {console.log(<any[]>res.json());
			return <any[]>res.json();
		})
	}
	Removedata(favouritelist:any)
	{
		console.log(this.url+'/'+favouritelist.date+'/'+favouritelist.city)
		return this._http.delete(this.url+'/'+favouritelist.date+'/'+favouritelist.city)
		.map((response:Response)=>{console.log(response.json());
			return <any[]>response.json()
		});
	}

	updateweather(favouritelist : any){
		return 1;
	}
}