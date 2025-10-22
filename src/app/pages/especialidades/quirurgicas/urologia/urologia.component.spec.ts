import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrologiaComponent } from './urologia.component';

describe('UrologiaComponent', () => {
  let component: UrologiaComponent;
  let fixture: ComponentFixture<UrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
