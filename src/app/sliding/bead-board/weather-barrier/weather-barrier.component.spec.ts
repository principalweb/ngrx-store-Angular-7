import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBarrierComponent } from './weather-barrier.component';

describe('WeatherBarrierComponent', () => {
  let component: WeatherBarrierComponent;
  let fixture: ComponentFixture<WeatherBarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
