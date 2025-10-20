import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSplitComponent } from './home-split.component';

describe('HomeSplitComponent', () => {
  let component: HomeSplitComponent;
  let fixture: ComponentFixture<HomeSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
