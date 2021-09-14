import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { ToDo } from '../../state/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() toDo: ToDo;

  @Output() completeChange = new EventEmitter<number>();

  sendToDoNum() {
    this.completeChange.emit(this.toDo.id);
    if (this.toDo.complete) {
      this.toDo.complete = false;
    } else {
      this.toDo.complete = true;
    }
  }
}
