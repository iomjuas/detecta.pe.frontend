import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeroMediaComponent } from './shared-hero-media.component';

describe('SharedHeroMediaComponent', () => {
  let component: SharedHeroMediaComponent;
  let fixture: ComponentFixture<SharedHeroMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedHeroMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedHeroMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
