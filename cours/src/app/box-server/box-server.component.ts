import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-server',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./box-server.component.scss']
})
export class BoxServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
