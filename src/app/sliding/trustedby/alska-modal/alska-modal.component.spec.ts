import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlskaModalComponent } from './alska-modal.component';

describe('AlskaModalComponent', () => {
  let component: AlskaModalComponent;
  let fixture: ComponentFixture<AlskaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlskaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlskaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
