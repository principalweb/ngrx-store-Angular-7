import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimContemporaryComponent } from './trim-contemporary.component';

describe('TrimContemporaryComponent', () => {
  let component: TrimContemporaryComponent;
  let fixture: ComponentFixture<TrimContemporaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimContemporaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimContemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
