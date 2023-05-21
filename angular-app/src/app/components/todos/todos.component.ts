import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = new Array();
  }

  ngOnInit() {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];
  }
}
interface Todo {
  content: string;
  completed: boolean;
}
