import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `<p class="alert-success"> Hello World </p>` ,
  styles: [`p{
      color: green;
  }`]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
