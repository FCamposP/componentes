import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motivador2Component } from './motivador2.component';

describe('Motivador2Component', () => {
  let component: Motivador2Component;
  let fixture: ComponentFixture<Motivador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Motivador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Motivador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
