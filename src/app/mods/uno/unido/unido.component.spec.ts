import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidoComponent } from './unido.component';

describe('UnidoComponent', () => {
  let component: UnidoComponent;
  let fixture: ComponentFixture<UnidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
