import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeroComponent } from './shared-hero.component';

describe('SharedHeroComponent', () => {
  let component: SharedHeroComponent;
  let fixture: ComponentFixture<SharedHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
