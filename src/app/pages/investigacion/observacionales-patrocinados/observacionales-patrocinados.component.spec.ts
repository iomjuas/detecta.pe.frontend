import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionalesPatrocinadosComponent } from './observacionales-patrocinados.component';

describe('ObservacionalesPatrocinadosComponent', () => {
  let component: ObservacionalesPatrocinadosComponent;
  let fixture: ComponentFixture<ObservacionalesPatrocinadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservacionalesPatrocinadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservacionalesPatrocinadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
