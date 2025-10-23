import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoHeroComponent } from './contacto-hero.component';

describe('ContactoHeroComponent', () => {
  let component: ContactoHeroComponent;
  let fixture: ComponentFixture<ContactoHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
