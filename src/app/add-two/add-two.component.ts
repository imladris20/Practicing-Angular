import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-two',
  standalone: true,
  imports: [],
  template: `
    <button class="btn" (click)="onAddTwoButtonClick()">Add Count 3</button>
    <button (click)="addTurtle()">Add turtle to items!</button>
    <button (click)="addItem('😼')">Add Cat to items!</button>
  `,
  styleUrl: './add-two.component.css',
})
export class AddTwoComponent {
  @Output() addCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();
  @Input() addItem!: (item: string) => void;

  onAddTwoButtonClick() {
    this.addCountEvent.emit(3);
  }

  addTurtle() {
    this.addItemEvent.emit('🐢');
  }

  addCat() {
    this.addItem('😼');
  }
}
