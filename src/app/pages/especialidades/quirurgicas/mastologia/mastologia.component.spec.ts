import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastologiaComponent } from './mastologia.component';

describe('MastologiaComponent', () => {
  let component: MastologiaComponent;
  let fixture: ComponentFixture<MastologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MastologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
