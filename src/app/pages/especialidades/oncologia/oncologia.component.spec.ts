import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologiaComponent } from './oncologia.component';

describe('OncologiaComponent', () => {
  let component: OncologiaComponent;
  let fixture: ComponentFixture<OncologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OncologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OncologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
