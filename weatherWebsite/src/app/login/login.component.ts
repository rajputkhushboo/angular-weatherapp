import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  info:any=[];
  refer:any={};
  data:any={};
  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit() {
  }

  getdata(data:any)
  {



    this.loginservice.logindata(data)

    .subscribe(Response=>{
      console.log(Response);
      console.log(data.username,data.password,Response);
      if((data.password==Response && ( data.username!=undefined || data.password!=undefined))){
        this.router.navigateByUrl('/header') ;
      }
      else{
        alert("Invalid");
      }
      
    });
  }
}


