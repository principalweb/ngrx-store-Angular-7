import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotResistantComponent } from './rot-resistant.component';

describe('RotResistantComponent', () => {
  let component: RotResistantComponent;
  let fixture: ComponentFixture<RotResistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotResistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotResistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
