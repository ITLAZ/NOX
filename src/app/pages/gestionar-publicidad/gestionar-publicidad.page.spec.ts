import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarPublicidadPage } from './gestionar-publicidad.page';

describe('GestionarPublicidadPage', () => {
  let component: GestionarPublicidadPage;
  let fixture: ComponentFixture<GestionarPublicidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPublicidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
