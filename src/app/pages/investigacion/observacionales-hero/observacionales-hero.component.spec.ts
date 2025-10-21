import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionalesHeroComponent } from './observacionales-hero.component';

describe('ObservacionalesHeroComponent', () => {
  let component: ObservacionalesHeroComponent;
  let fixture: ComponentFixture<ObservacionalesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservacionalesHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservacionalesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
