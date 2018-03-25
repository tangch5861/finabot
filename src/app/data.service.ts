import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Rx';  
import { catchError } from 'rxjs/operators';
  
import 'rxjs/add/operator/map';  
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class DataService {
	readonly rootUrl = 'http://35.187.233.86';
  	private handleError: HandleError;

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
  	

  constructor(private http : HttpClient,
    httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('DataService');
  }

  GetMenuItems(){
  	//return this.http.post(this.rootUrl + '/api/GetMenuItems');	
  	let apiUrl = this.rootUrl + '/api/GetMenuItems';  
        return this.http.get(apiUrl)  
                   .map((res: Response) => {return res});  
  }

  GetProducts(){
  	//let apiUrl = this.rootUrl + '/api/Product/GetProducts';  
  	let apiUrl = 'http://localhost:55714' + '/api/GetProducts'; 
  	/*const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });*/
  	let postParams = {categoryID: 1};
        return this.http.post(apiUrl,JSON.stringify(postParams)	)  
                   .map((res: Response) => {return res});  
  }
  /** POST: add a new hero to the database */
  addHero (hero: Hero): Observable<Hero> {
  	let apiUrl = 'http://localhost:55714' + '/api/GetProducts'; 
    return this.http.post<Hero>(apiUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }
 /* changeGoal(menu){
  	this.menus.next(menu);
  }*/

}

export interface Hero {
  categoryID: number;
}
