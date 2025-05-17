import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayQRPage } from './pay-qr.page';

describe('PayQRPage', () => {
  let component: PayQRPage;
  let fixture: ComponentFixture<PayQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
