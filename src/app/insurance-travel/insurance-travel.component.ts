import { Component, OnInit } from '@angular/core';
import { DataService} from './../data.service';

@Component({
	selector: 'app-insurance-travel',
	templateUrl: './insurance-travel.component.html',
	styleUrls: ['./insurance-travel.component.scss']
})
export class InsuranceTravelComponent implements OnInit {


	public items = [
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


	constructor(private _data:DataService) { }

	ngOnInit() {
	  	//to fix reload issue
	  	this.loadScript('assets/js/scripts.min.js');
	  	this.loadScript('assets/js/vendor.min.js');

       //start getting data
       console.log(this.items);

       let product : any;
       this._data.GetProducts().subscribe(res => product = res);
       console.log("ppp "+ product);
   }



   public loadScript(url) {
   	console.log('preparing to load...')
   	let node = document.createElement('script');
   	node.src = url;
   	node.type = 'text/javascript';
   	document.getElementsByTagName('body')[0].appendChild(node);
   }

}
