import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembresiaPlanPage } from './membresia-plan.page';

describe('MembresiaPlanPage', () => {
  let component: MembresiaPlanPage;
  let fixture: ComponentFixture<MembresiaPlanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresiaPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
