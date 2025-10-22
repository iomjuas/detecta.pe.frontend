import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiaPlasticaComponent } from './cirugia-plastica.component';

describe('CirugiaPlasticaComponent', () => {
  let component: CirugiaPlasticaComponent;
  let fixture: ComponentFixture<CirugiaPlasticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CirugiaPlasticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirugiaPlasticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
