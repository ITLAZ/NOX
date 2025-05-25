import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'filter-actions',
  templateUrl: './filter-actions.component.html',
  styleUrls: ['./filter-actions.component.scss'],
  standalone: false,
})
export class FilterActionsComponent  implements OnInit {

  @Input() showCards: boolean = false;
  @Input() eventos: boolean = false;
  @Input() lugares: boolean = false;

  constructor() { }

  ngOnInit() {}

}
