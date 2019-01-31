import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TollModalComponent } from './toll-modal.component';

describe('TollModalComponent', () => {
  let component: TollModalComponent;
  let fixture: ComponentFixture<TollModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
