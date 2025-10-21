import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionContactoComponent } from './investigacion-contacto.component';

describe('InvestigacionContactoComponent', () => {
  let component: InvestigacionContactoComponent;
  let fixture: ComponentFixture<InvestigacionContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigacionContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigacionContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
