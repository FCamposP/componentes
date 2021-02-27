import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoodComponent } from './cargood.component';

describe('CargoodComponent', () => {
  let component: CargoodComponent;
  let fixture: ComponentFixture<CargoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
