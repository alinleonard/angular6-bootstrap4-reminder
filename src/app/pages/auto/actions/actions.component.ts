import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-actions',
  template: `<div class="row">
    <ngx-reminders class="col-lg-6 col-md-6"></ngx-reminders>
    <ngx-services class="col-lg-6 col-md-6"></ngx-services>
  </div>
  `
})
export class ActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
