import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'todo-item',
  template: `
    <div>
      <span>{{todo.title}}</span>
      <input type="checkbox" [(ng-model)]="todo.completed">
      <span>{{todo.completed}}</span>
    </div>
  `,
  inputs: ['todo'],
  directives: [FORM_DIRECTIVES]
})
export class TodoItem {}