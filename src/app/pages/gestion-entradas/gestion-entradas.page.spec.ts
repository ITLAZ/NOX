import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionEntradasPage } from './gestion-entradas.page';

describe('GestionEntradasPage', () => {
  let component: GestionEntradasPage;
  let fixture: ComponentFixture<GestionEntradasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEntradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
