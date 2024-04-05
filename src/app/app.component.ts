import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTwoComponent } from './add-two/add-two.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    ServerStatusComponent,
    AddTwoComponent,
  ],
  template: `
    <section>
      <app-user [backNumber]="29" exampleUser="haha"></app-user>
    </section>
    <section>
      <app-server-status></app-server-status>
    </section>
    <p>Welcome to {{ city }}! Now is year {{ 2023 + 1 }}</p>
    <div [contentEditable]="isDivEditable">This paragraph is editable</div>
    <h2 [contentEditable]="isDivEditable">This title is also editable</h2>
    <button (click)="greeting()">Greeting in console</button>
    <section (mouseover)="surprise()" (mouseleave)="hideSurprice()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    <h1>Practicing &#64;Output and eventEmitter</h1>
    <h2>Count: {{ count }}</h2>
    <button (click)="addCount(1)">Add Count 1</button>
    <app-add-two
      (addCountEvent)="addCount($event)"
      (addItemEvent)="addItem($event)"
      [addItem]="addItem"
    ></app-add-two>
    <h2>Items Array</h2>
    <p>{{ items }}</p>
  `,
  styles: `
    :host{
      color: hotpink;
    }
  `,
})
export class AppComponent {
  city: string = 'Taoyuan City';
  count: number = 0;
  isDivEditable = true;
  message = '';
  items = new Array();

  surprise: () => void = () => {
    this.message = 'surprise mdfk!';
  };
  hideSurprice: () => void = () => {
    this.message = '';
  };
  greeting: () => void = () => {
    console.log('hello, there!');
  };

  addCount = (amount: number) => {
    this.count += amount;
  };

  addItem = (item: string) => {
    const newItems = [...this.items];
    newItems.push(item);
    this.items = newItems;
  };
}
