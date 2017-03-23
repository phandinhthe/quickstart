import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a routerLink="/heroes" routerLinkActive="active">heroes</a>
    <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
