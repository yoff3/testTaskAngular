import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made with Angular by <a class="authorLink" href="https://github.com/yoff3">Tatsiana Belikava</a></p>
      </div>
    </footer>
  `,
  styles: [`
    .authorLink{
      text-decoration: none;
      color: black;
      weight: 500;
      font-size: 18px;
    }
  `
  ]
})
export class FooterComponent {

}
