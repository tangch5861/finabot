import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
