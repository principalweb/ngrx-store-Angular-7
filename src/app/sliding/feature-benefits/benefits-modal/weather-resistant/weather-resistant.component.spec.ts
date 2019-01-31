import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherResistantComponent } from './weather-resistant.component';

describe('WeatherResistantComponent', () => {
  let component: WeatherResistantComponent;
  let fixture: ComponentFixture<WeatherResistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherResistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherResistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
