import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembresiasPage } from './membresias.page';

describe('MembresiasPage', () => {
  let component: MembresiasPage;
  let fixture: ComponentFixture<MembresiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
