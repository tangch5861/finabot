import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private menus = new BehaviorSubject<any>([
		{ 
			"title": "Home",
		  	"link": ""
		},
	    {
	    	"title": "Insurance", 
	    	"link": "insurance",
		   	"sub":[
			   	{
			   		"title":"Travel",
			  		"link": ""
				},
			   	{
			   		"title":"Motor",
			  		"link": ""
				}
			]
		},
	    {
	    	"title": "Credit cards",
	    	"link": "credit-card",
		   	"sub":[{
		   		"title":"Travel",
		  		"link": ""
			}]

	    },
	    { 
	    	"title": "Loans", 
	    	"link": "loans",
		   	"sub":[{
		   		"title":"Travel",
		  		"link": ""
			}]
		},
	    { 
	    	"title": "Investment",
	    	"link": "investment",
		   	"sub":[{
		   		"title":"Travel",
		  		"link": ""
			}]
	    }
	]);

	menu = this.menus.asObservable();
  	

  constructor() { 
  }

  changeGoal(menu){
  	this.menus.next(menu);
  }

}
