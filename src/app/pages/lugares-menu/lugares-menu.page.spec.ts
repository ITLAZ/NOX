import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresMenuPage } from './lugares-menu.page';

describe('LugaresMenuPage', () => {
  let component: LugaresMenuPage;
  let fixture: ComponentFixture<LugaresMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
