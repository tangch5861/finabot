import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-motor',
  templateUrl: './insurance-motor.component.html',
  styleUrls: ['./insurance-motor.component.scss']
})
export class InsuranceMotorComponent implements OnInit {

	public items = [
	    {
	    	"discount": "20% Off", 
	    	"imgPath": "assets/img/shop/products/05.jpg",
		   	"title": "Motor Royal",
		   	"price": "$19.99",
		   	"oldPrice": "$99.99",
		   	"btnLink": "/",
		   	"noStars":3
			
		},
		{
	    	"discount": "", 
	    	"imgPath": "assets/img/shop/products/08.jpg",
		   	"title": "Bike Royal",
		   	"price": "$29.99",
		   	"btnLink": "/",
		   	"noStars":1	
		}
	];

  constructor() { }

  ngOnInit() {
       this.loadScript('assets/js/scripts.min.js');
       this.loadScript('assets/js/vendor.min.js');
  }
	public loadScript(url) {
	    console.log('preparing to load...')
	    let node = document.createElement('script');
	    node.src = url;
	    node.type = 'text/javascript';
	    document.getElementsByTagName('body')[0].appendChild(node);
	 }

}
