import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerStatusComponent } from './server-status/server-status.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ServerStatusComponent],
  template: `
    <section>
      <app-user></app-user>
    </section>
    <section>
      <app-server-status></app-server-status>
    </section>
    <p>Welcome to {{ city }}! Now is year {{ 2023 + 1 }}</p>
    <div [contentEditable]="isDivEditable">This paragraph is editable</div>
    <h2 [contentEditable]="isDivEditable">This title is also editable</h2>
  `,
  styles: `
    :host{
      color: #a144eb;
    }
  `,
})
export class AppComponent {
  city: string = 'Taoyuan City';
  isDivEditable = true;
}
