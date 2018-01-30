import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';	

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

}
