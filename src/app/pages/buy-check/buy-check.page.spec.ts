import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyCheckPage } from './buy-check.page';

describe('BuyCheckPage', () => {
  let component: BuyCheckPage;
  let fixture: ComponentFixture<BuyCheckPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
