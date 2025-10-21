import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionPresentacionComponent } from './investigacion-presentacion.component';

describe('InvestigacionPresentacionComponent', () => {
  let component: InvestigacionPresentacionComponent;
  let fixture: ComponentFixture<InvestigacionPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigacionPresentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigacionPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
