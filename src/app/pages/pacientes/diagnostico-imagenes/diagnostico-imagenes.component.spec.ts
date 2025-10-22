import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoImagenesComponent } from './diagnostico-imagenes.component';

describe('DiagnosticoImagenesComponent', () => {
  let component: DiagnosticoImagenesComponent;
  let fixture: ComponentFixture<DiagnosticoImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosticoImagenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticoImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
