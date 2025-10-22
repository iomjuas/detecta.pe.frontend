import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurocirugiaComponent } from './neurocirugia.component';

describe('NeurocirugiaComponent', () => {
  let component: NeurocirugiaComponent;
  let fixture: ComponentFixture<NeurocirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeurocirugiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeurocirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
