import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasOperacionesComponent } from './salas-operaciones.component';

describe('SalasOperacionesComponent', () => {
  let component: SalasOperacionesComponent;
  let fixture: ComponentFixture<SalasOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalasOperacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
