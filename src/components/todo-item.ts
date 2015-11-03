import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
  selector: 'todo-item',
  template: `
    <div>
      <a [router-link]="['/TodoDetail', {id: todo.id}]">{{todo.title}}</a>
      <input type="checkbox" [(ng-model)]="todo.completed">
      <span>{{todo.completed}}</span>
    </div>
  `,
  inputs: ['todo'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class TodoItem {}