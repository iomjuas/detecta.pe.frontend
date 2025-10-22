import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NefrologiaComponent } from './nefrologia.component';

describe('NefrologiaComponent', () => {
  let component: NefrologiaComponent;
  let fixture: ComponentFixture<NefrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NefrologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NefrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
