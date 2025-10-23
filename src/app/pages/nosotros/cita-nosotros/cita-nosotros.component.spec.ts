import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaNosotrosComponent } from './cita-nosotros.component';

describe('CitaNosotrosComponent', () => {
  let component: CitaNosotrosComponent;
  let fixture: ComponentFixture<CitaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitaNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
