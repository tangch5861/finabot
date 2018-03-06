import { Component } from '@angular/core';
import { DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _data:DataService){

  }

  menus :any;

  ngOnInit(){

    this._data.GetMenuItems().subscribe(res => this.menus = res);
    
  }

}
