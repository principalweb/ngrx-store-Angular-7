import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactResistantComponent } from './impact-resistant.component';

describe('ImpactResistantComponent', () => {
  let component: ImpactResistantComponent;
  let fixture: ComponentFixture<ImpactResistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactResistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactResistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
