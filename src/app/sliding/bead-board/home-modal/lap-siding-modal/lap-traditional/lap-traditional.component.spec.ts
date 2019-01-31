import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapTraditionalComponent } from './lap-traditional.component';

describe('LapTraditionalComponent', () => {
  let component: LapTraditionalComponent;
  let fixture: ComponentFixture<LapTraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapTraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
