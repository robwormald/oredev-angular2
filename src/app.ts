import {Component, Inject ,Injectable, CORE_DIRECTIVES, FORM_DIRECTIVES, NgModel} from 'angular2/angular2';
import {TodoService} from './todoService';
import {NewTodo} from './new-todo';
import {TodoItem} from './todo-item';

@Component({
  selector: 'todo-app',
  template: ` 
    <div>
     <h1>My TodoApp </h1>
     <new-todo (created)="addedTodo($event)"></new-todo>
     <div *ng-for="#todo of todoService.todos">
       <todo-item [todo]="todo"></todo-item>
     </div>
    </div>
  `,
  providers: [TodoService],
  directives:[CORE_DIRECTIVES, NewTodo, TodoItem]
})
export class App {
  constructor(public todoService: TodoService){}
  
  addedTodo(text){
    this.todoService.addTodo({
      title: text,
      completed: false
    });
  }
}


