import {TodoItem} from './todo-item';
import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from '../services/todoService';
@Component({
  selector: 'todo-list',
  template: `
    <h2>My Todos</h2>
    <div *ng-for="#todo of todoService.todos">
       <todo-item [todo]="todo"></todo-item>
    </div>
  `,
  inputs: ['todos'],
  directives: [TodoItem, CORE_DIRECTIVES]
})
export class TodoList {
  constructor(public todoService: TodoService){}
}