import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            My home page
          </h1>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero{
      background-image: url('/assets/images/sunset.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `
  ]
})
export class HomeComponent {

}
