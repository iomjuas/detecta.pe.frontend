import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraumatologiaComponent } from './traumatologia.component';

describe('TraumatologiaComponent', () => {
  let component: TraumatologiaComponent;
  let fixture: ComponentFixture<TraumatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraumatologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraumatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
