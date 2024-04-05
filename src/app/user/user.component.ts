import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <p>mainUser: {{ mainUser }}</p>
    <h1>Other Users</h1>
    @for(user of users ; track user.id){
    <h3>{{ user.name }}</h3>
    }
  `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  mainUser = 'Po Lien, aspiring programmer';
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
