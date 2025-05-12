import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsTestPage } from './components-test.page';

describe('ComponentsTestPage', () => {
  let component: ComponentsTestPage;
  let fixture: ComponentFixture<ComponentsTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
