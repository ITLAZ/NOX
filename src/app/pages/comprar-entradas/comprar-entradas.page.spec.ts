import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprarEntradasPage } from './comprar-entradas.page';

describe('ComprarEntradasPage', () => {
  let component: ComprarEntradasPage;
  let fixture: ComponentFixture<ComprarEntradasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarEntradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
