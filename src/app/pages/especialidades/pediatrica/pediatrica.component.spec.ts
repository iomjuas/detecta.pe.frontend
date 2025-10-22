import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricaComponent } from './pediatrica.component';

describe('PediatricaComponent', () => {
  let component: PediatricaComponent;
  let fixture: ComponentFixture<PediatricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PediatricaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
