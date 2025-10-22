import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioAnatomiaComponent } from './laboratorio-anatomia.component';

describe('LaboratorioAnatomiaComponent', () => {
  let component: LaboratorioAnatomiaComponent;
  let fixture: ComponentFixture<LaboratorioAnatomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratorioAnatomiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratorioAnatomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
