import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService{

  constructor(private http:Http) { }


  logindata(data:any){
  	const getUrl="http://localhost:8000/login";
  	return this.http

  	.post(getUrl,data)
  	.map((response:Response)=>{return <any>response.json()[0].password;
  		//console.log(response.json());
  	});

  }


}
