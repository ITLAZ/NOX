import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresTestPage } from './lugares-test.page';

describe('LugaresTestPage', () => {
  let component: LugaresTestPage;
  let fixture: ComponentFixture<LugaresTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
