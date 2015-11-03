import {Component, Inject ,Injectable, CORE_DIRECTIVES, FORM_DIRECTIVES, NgModel} from 'angular2/angular2';
import {TodoService} from './todoService';

@Component({
  selector: 'todo-app',
  template: ` 
    <div>
     <h1>My TodoApp </h1>
    </div>
  `,
  providers: [TodoService],
  directives:[CORE_DIRECTIVES]
})
export class App {
  constructor(public todoService: TodoService){}
}

