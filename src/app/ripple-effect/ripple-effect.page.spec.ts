import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RippleEffectPage } from './ripple-effect.page';

describe('RippleEffectPage', () => {
  let component: RippleEffectPage;
  let fixture: ComponentFixture<RippleEffectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
