import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMaxModalComponent } from './color-max-modal.component';

describe('ColorMaxModalComponent', () => {
  let component: ColorMaxModalComponent;
  let fixture: ComponentFixture<ColorMaxModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorMaxModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMaxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
