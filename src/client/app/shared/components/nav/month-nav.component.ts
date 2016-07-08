import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  directives: [NgFor, ROUTER_DIRECTIVES],
  selector: 'month-nav',
  templateUrl: 'month-nav.component.html',
  styleUrls: ['month-nav.component.css']
})

export class MonthNavComponent {
  @Input() months: Array<string>
}