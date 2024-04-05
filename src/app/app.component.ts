import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
    <section>
      <app-user></app-user>
    </section>
    <p>Welcome to {{ city }}! Now is year {{ 2023 + 1 }}</p>
  `,
  styles: `
    :host{
      color: #a144eb;
    }
  `,
})
export class AppComponent {
  city: string = 'Taoyuan City';
}
