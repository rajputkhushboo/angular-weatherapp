import { Component ,OnInit } from '@angular/core';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  providers:[FavouritesService]
})
export class FavouritesComponent implements OnInit{
  constructor(private DisplayService :FavouritesService) { }
  Display: any;
  deletes:any=[];
  update:any;

  getDisplayData(){
  	this.DisplayService.DisplayData().subscribe(refer=> {
  		this.Display=refer;
  		console.log(this.Display);
  		return this.Display;
  	});
  }

  deletefavourites(favouritelist :any){
    this.DisplayService.Removedata(favouritelist)
    .subscribe(data=> this.deletes=data);
  }

  updateweather(favouritelist: any){
    this.update=favouritelist;
  }
  ngOnInit(){ this.getDisplayData(); }
}


