import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/images/angular-logo.png" href="">
        </a>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" routerLink="/">Home</a>
            <a class="navbar-item" routerLink="/authorization">Athorization</a>
            <a class="navbar-item" routerLink="/registration">Registration</a>
            <a class="navbar-item" routerLink="/users">Users/Resources</a>
          </div>
        </div>
      </div>
  </header>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
