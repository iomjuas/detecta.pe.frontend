import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASEGURADORASComponent } from './aseguradoras.component';

describe('ASEGURADORASComponent', () => {
  let component: ASEGURADORASComponent;
  let fixture: ComponentFixture<ASEGURADORASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ASEGURADORASComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASEGURADORASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
