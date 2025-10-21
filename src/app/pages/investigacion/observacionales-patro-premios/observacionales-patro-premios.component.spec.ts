import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionalesPatroPremiosComponent } from './observacionales-patro-premios.component';

describe('ObservacionalesPatroPremiosComponent', () => {
  let component: ObservacionalesPatroPremiosComponent;
  let fixture: ComponentFixture<ObservacionalesPatroPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservacionalesPatroPremiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservacionalesPatroPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
