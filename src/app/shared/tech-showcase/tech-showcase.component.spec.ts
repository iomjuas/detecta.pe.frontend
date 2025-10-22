import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechShowcaseComponent } from './tech-showcase.component';

describe('TechShowcaseComponent', () => {
  let component: TechShowcaseComponent;
  let fixture: ComponentFixture<TechShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
