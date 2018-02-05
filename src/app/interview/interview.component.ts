import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  completed_1: boolean = true;
  completed_2: boolean = false;
  completed_3: boolean = false;
  completed_4: boolean = false;
  done_1: boolean = false;
  done_2: boolean = false;
  done_3: boolean = false;
  done_4: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  GoToNext(value) {

  	if(value == 1) {
  		this.completed_1 = true;
  		this.completed_2 = false;
  		this.completed_3 = false;
  		this.completed_4 = false;
  	}
  	if(value == 2) {
  		this.completed_1 = false;
  		this.completed_2 = true;
  		this.done_1 = true;
  		this.completed_3 = false;
  		this.completed_4 = false;
  	}
  	if(value == 3) {
  		this.completed_2 = false;
  		this.completed_3 = true;
  		this.done_2 = true;
  		this.completed_4 = false;
  		this.completed_1 = false;
  	}
  	if(value == 4) {
  		this.completed_3 = false;
  		this.completed_4 = true;
  		this.done_3 = true;
  		this.completed_2 = false;
  		this.completed_1 = false;
  	}
	  	
  }

  InterviewCompleted(){

  }

}
