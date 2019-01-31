import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContemporaryComponent } from './panel-contemporary.component';

describe('PanelContemporaryComponent', () => {
  let component: PanelContemporaryComponent;
  let fixture: ComponentFixture<PanelContemporaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelContemporaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelContemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
