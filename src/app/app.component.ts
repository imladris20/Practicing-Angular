import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTwoComponent } from './add-two/add-two.component';
import { CommentsComponent } from './comments/comments.component';
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
    CommentsComponent,
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
    <section>
      <!-- 想看看defer的on viewport 效果，可以uncomment以下一大段 article -->
      <!-- <article>
        <h1>PlaceHolder of seeing effect of defer (on viewport)</h1>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted.
        </p>
      </article> -->
      <h1>Comments Section</h1>
      @defer(on viewport){
      <app-comments></app-comments>
      } @placeholder {
      <p>Placeholder: Future Comments</p>
      } @loading(minimum 3s) {
      <p>Loading Comments</p>
      }
    </section>
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
