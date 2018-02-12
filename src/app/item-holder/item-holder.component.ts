import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-item-holder',
  templateUrl: './item-holder.component.html',
  styleUrls: ['./item-holder.component.scss']
})
export class ItemHolderComponent implements OnInit {

	@Input("parentData") public items;
	btnText : string = "Buy Now";

  constructor() { 
  }

  ngOnInit() {
  	
  	var i = $(".isotope-grid").imagesLoaded(
  		function(){
  			i.isotope({itemSelector:".grid-item",transitionDuration:"0.7s",masonry:{columnWidth:".grid-sizer",gutter:".gutter-sizer"}})
  		}
  	);

  }

}
