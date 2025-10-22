import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioClinicoComponent } from './laboratorio-clinico.component';

describe('LaboratorioClinicoComponent', () => {
  let component: LaboratorioClinicoComponent;
  let fixture: ComponentFixture<LaboratorioClinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratorioClinicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratorioClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
