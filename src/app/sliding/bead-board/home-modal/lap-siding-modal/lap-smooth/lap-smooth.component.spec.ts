import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapSmoothComponent } from './lap-smooth.component';

describe('LapSmoothComponent', () => {
  let component: LapSmoothComponent;
  let fixture: ComponentFixture<LapSmoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapSmoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
