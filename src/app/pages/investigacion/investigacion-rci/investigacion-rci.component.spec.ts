import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionRciComponent } from './investigacion-rci.component';

describe('InvestigacionRciComponent', () => {
  let component: InvestigacionRciComponent;
  let fixture: ComponentFixture<InvestigacionRciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigacionRciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigacionRciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
