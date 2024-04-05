import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `Welcome to {{ city }}! Now is year {{ 2023 + 1 }}`,
  styles: `
    :host{
      color: #a144eb;
    }
  `,
})
export class AppComponent {
  city: string = 'Taoyuan City';
}
