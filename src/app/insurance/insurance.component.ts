import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';	
import { DataService, Hero} from './../data.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private route: ActivatedRoute, private _data:DataService) { 
  }

  products :any;

  ngOnInit() {
  	/*this._data.GetProducts().subscribe(res => this.products = res);
  	console.log("this.products "+ this.products);
*/

    // The server will generate the id for this new hero
    const newHero : Hero = { categoryID : 1 } as Hero;
    this._data.addHero(newHero)
      .subscribe(hero => this.heroes.push(hero));

      console.log(this.heroes);
  }


}
