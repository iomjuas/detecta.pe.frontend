import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernHeroComponent } from './modern-hero.component';

describe('ModernHeroComponent', () => {
  let component: ModernHeroComponent;
  let fixture: ComponentFixture<ModernHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModernHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
