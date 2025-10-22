import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaIntensivaComponent } from './medicina-intensiva.component';

describe('MedicinaIntensivaComponent', () => {
  let component: MedicinaIntensivaComponent;
  let fixture: ComponentFixture<MedicinaIntensivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicinaIntensivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinaIntensivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
