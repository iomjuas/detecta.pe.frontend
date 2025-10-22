import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirujiaOncologicaComponent } from './cirujia-oncologica.component';

describe('CirujiaOncologicaComponent', () => {
  let component: CirujiaOncologicaComponent;
  let fixture: ComponentFixture<CirujiaOncologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CirujiaOncologicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirujiaOncologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
