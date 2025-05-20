import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresCardPage } from './lugares-card.page';

describe('LugaresCardPage', () => {
  let component: LugaresCardPage;
  let fixture: ComponentFixture<LugaresCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
