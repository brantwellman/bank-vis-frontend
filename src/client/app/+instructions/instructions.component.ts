import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'instructions',
  templateUrl: 'instructions.html',
  styleUrls: ['instructions.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
})

export class InstructionsComponent {
  constructor(private router: Router) {}
}
