import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCasingComponent } from './tile-casing.component';

describe('TileCasingComponent', () => {
  let component: TileCasingComponent;
  let fixture: ComponentFixture<TileCasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileCasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
