import { Component, Input } from '@angular/core';

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
    <h4>BackNumber props from app component: {{ backNumber }}</h4>
    <h4>exampleUser props from app component: {{ exampleUser }}</h4>
  `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() backNumber!: number;
  @Input() exampleUser!: string;
  mainUser = 'Po Lien, aspiring programmer';
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
