import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionEquipoComponent } from './investigacion-equipo.component';

describe('InvestigacionEquipoComponent', () => {
  let component: InvestigacionEquipoComponent;
  let fixture: ComponentFixture<InvestigacionEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigacionEquipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigacionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
