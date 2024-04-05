import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  template: `
    @if(isServerRunning) {
    <p>The server is running.</p>
    } @else {
    <p>The server is not running</p>
    }
  `,
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  isServerRunning: boolean = false;
}
