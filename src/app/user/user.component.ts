import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: ` <p>Username: {{ username }}</p> `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'Po Lien, aspiring programmer';
}
