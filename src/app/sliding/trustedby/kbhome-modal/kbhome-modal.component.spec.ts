import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbhomeModalComponent } from './kbhome-modal.component';

describe('KbhomeModalComponent', () => {
  let component: KbhomeModalComponent;
  let fixture: ComponentFixture<KbhomeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbhomeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbhomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
