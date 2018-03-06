import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Rx';  
  
import 'rxjs/add/operator/map';  

@Injectable()
export class DataService {
	readonly rootUrl = 'http://35.187.233.86';

	/*private menus = new BehaviorSubject<any>([
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
			  		"link": "insurance-travel"
				},
			   	{
			   		"title":"Motor",
			  		"link": "insurance-motor"
				}
			]
		},
	    {
	    	"title": "Credit cards",
	    	"link": "credit-card",
		   	"sub":[{
		   		"title":"Travel",
		  		"link": "insurance-travel"
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

	menu = this.menus.asObservable();*/
  	

  constructor(private http : HttpClient) { 
  }

  GetMenuItems(){
  	//return this.http.post(this.rootUrl + '/api/GetMenuItems');	
  	let apiUrl = this.rootUrl + '/api/GetMenuItems';  
        return this.http.get(apiUrl)  
                   .map((res: Response) => {return res});  
  }
 /* changeGoal(menu){
  	this.menus.next(menu);
  }*/

}
