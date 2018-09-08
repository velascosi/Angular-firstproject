import { Component } from '@angular/core';
// import { request } from 'http';
// import { renderComponent } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>{{ tittle }}</h1><p>{{ description }} is cool</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello srvup2!';
  description = 'A new app'
}
