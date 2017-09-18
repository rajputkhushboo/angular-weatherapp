import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegisterService {

  constructor(private http:Http) { }

  registerdata(data:any){
  	const getUrl="http://localhost:8000/register";
  	return this.http

  	.post(getUrl,data)
  	.map((response:Response)=><any>response.json());

  }

}
