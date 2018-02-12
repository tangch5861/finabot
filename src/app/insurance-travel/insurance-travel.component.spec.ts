import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTravelComponent } from './insurance-travel.component';

describe('InsuranceTravelComponent', () => {
  let component: InsuranceTravelComponent;
  let fixture: ComponentFixture<InsuranceTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
