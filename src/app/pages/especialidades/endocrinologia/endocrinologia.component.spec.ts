import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndocrinologiaComponent } from './endocrinologia.component';

describe('EndocrinologiaComponent', () => {
  let component: EndocrinologiaComponent;
  let fixture: ComponentFixture<EndocrinologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndocrinologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndocrinologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
