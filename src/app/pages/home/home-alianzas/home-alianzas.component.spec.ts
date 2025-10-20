import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlianzasComponent } from './home-alianzas.component';

describe('HomeAlianzasComponent', () => {
  let component: HomeAlianzasComponent;
  let fixture: ComponentFixture<HomeAlianzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAlianzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAlianzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
