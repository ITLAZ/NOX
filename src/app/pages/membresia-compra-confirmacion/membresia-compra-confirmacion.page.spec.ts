import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembresiaCompraConfirmacionPage } from './membresia-compra-confirmacion.page';

describe('MembresiaCompraConfirmacionPage', () => {
  let component: MembresiaCompraConfirmacionPage;
  let fixture: ComponentFixture<MembresiaCompraConfirmacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresiaCompraConfirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
