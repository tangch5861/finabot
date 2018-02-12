import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-travel',
  templateUrl: './insurance-travel.component.html',
  styleUrls: ['./insurance-travel.component.scss']
})
export class InsuranceTravelComponent implements OnInit {


	private items = [
	    {
	    	"discount": "50% Off", 
	    	"imgPath": "assets/img/shop/products/01.jpg",
		   	"title": "Reebok Royal",
		   	"price": "$49.99",
		   	"oldPrice": "$99.99",
		   	"btnLink": "/",
		   	"noStars":5
			
		},
		{
	    	"discount": "10% Off", 
	    	"imgPath": "assets/img/shop/products/01.jpg",
		   	"title": "Nike Royal",
		   	"price": "$49.99",
		   	"btnLink": "/",
		   	"noStars":3	
		}
	];


  constructor() { }

  ngOnInit() {
  	console.log(this.items);
  }

}
