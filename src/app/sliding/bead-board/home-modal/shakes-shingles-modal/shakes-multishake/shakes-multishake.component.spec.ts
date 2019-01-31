import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesMultishakeComponent } from './shakes-multishake.component';

describe('ShakesMultishakeComponent', () => {
  let component: ShakesMultishakeComponent;
  let fixture: ComponentFixture<ShakesMultishakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakesMultishakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesMultishakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
