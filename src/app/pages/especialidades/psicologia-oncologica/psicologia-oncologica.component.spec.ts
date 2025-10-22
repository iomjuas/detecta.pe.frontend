import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaOncologicaComponent } from './psicologia-oncologica.component';

describe('PsicologiaOncologicaComponent', () => {
  let component: PsicologiaOncologicaComponent;
  let fixture: ComponentFixture<PsicologiaOncologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsicologiaOncologicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologiaOncologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
