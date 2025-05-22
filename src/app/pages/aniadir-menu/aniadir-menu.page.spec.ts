import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AniadirMenuPage } from './aniadir-menu.page';

describe('AniadirMenuPage', () => {
  let component: AniadirMenuPage;
  let fixture: ComponentFixture<AniadirMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
