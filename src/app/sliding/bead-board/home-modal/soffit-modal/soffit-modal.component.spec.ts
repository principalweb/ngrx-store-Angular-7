import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoffitModalComponent } from './soffit-modal.component';

describe('SoffitModalComponent', () => {
  let component: SoffitModalComponent;
  let fixture: ComponentFixture<SoffitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoffitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoffitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
