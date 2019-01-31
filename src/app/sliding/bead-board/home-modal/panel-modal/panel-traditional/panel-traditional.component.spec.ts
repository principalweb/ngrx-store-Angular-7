import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTraditionalComponent } from './panel-traditional.component';

describe('PanelTraditionalComponent', () => {
  let component: PanelTraditionalComponent;
  let fixture: ComponentFixture<PanelTraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
