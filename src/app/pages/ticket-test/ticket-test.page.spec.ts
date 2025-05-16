import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketTestPage } from './ticket-test.page';

describe('TicketTestPage', () => {
  let component: TicketTestPage;
  let fixture: ComponentFixture<TicketTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
