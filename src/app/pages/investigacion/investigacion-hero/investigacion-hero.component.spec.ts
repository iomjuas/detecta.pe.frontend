import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionHeroComponent } from './investigacion-hero.component';

describe('InvestigacionHeroComponent', () => {
  let component: InvestigacionHeroComponent;
  let fixture: ComponentFixture<InvestigacionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigacionHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigacionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
