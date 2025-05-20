import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelAdmin2Page } from './panel-admin-2.page';

describe('PanelAdmin2Page', () => {
  let component: PanelAdmin2Page;
  let fixture: ComponentFixture<PanelAdmin2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAdmin2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
