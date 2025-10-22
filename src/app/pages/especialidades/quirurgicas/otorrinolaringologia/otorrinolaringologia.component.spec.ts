import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtorrinolaringologiaComponent } from './otorrinolaringologia.component';

describe('OtorrinolaringologiaComponent', () => {
  let component: OtorrinolaringologiaComponent;
  let fixture: ComponentFixture<OtorrinolaringologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtorrinolaringologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtorrinolaringologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
