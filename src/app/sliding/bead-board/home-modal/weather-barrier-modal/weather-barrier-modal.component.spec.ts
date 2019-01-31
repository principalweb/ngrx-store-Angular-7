import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBarrierModalComponent } from './weather-barrier-modal.component';

describe('WeatherBarrierModalComponent', () => {
  let component: WeatherBarrierModalComponent;
  let fixture: ComponentFixture<WeatherBarrierModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBarrierModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBarrierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
