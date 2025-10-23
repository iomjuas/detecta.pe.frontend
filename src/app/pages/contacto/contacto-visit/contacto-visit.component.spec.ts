import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoVisitComponent } from './contacto-visit.component';

describe('ContactoVisitComponent', () => {
  let component: ContactoVisitComponent;
  let fixture: ComponentFixture<ContactoVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoVisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
