import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayCardPage } from './pay-card.page';

describe('PayCardPage', () => {
  let component: PayCardPage;
  let fixture: ComponentFixture<PayCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
