import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesShinglesModalComponent } from './shakes-shingles-modal.component';

describe('ShakesShinglesModalComponent', () => {
  let component: ShakesShinglesModalComponent;
  let fixture: ComponentFixture<ShakesShinglesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakesShinglesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesShinglesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
