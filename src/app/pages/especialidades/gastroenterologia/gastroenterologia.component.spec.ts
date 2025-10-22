import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroenterologiaComponent } from './gastroenterologia.component';

describe('GastroenterologiaComponent', () => {
  let component: GastroenterologiaComponent;
  let fixture: ComponentFixture<GastroenterologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastroenterologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastroenterologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
