import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefineUbiPage } from './define-ubi.page';

describe('DefineUbiPage', () => {
  let component: DefineUbiPage;
  let fixture: ComponentFixture<DefineUbiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineUbiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
