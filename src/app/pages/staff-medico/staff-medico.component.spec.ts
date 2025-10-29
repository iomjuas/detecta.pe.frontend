import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMedicoComponent } from './staff-medico.component';

describe('StaffMedicoComponent', () => {
  let component: StaffMedicoComponent;
  let fixture: ComponentFixture<StaffMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
