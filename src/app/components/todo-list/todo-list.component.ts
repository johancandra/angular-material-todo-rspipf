import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { generateToDos, ToDo } from '../../state/todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() toDo: ToDo;

  @Input() toDoNum: number;

  @Output() toDoChange = new EventEmitter<ToDo>();

  constructor() {}
}
