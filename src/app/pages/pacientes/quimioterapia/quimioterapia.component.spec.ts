import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimioterapiaComponent } from './quimioterapia.component';

describe('QuimioterapiaComponent', () => {
  let component: QuimioterapiaComponent;
  let fixture: ComponentFixture<QuimioterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuimioterapiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuimioterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
