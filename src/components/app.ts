import {Component, Inject, Injectable, CORE_DIRECTIVES, FORM_DIRECTIVES, NgModel} from 'angular2/angular2';
import {TodoService} from '../services/todoService';
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS, Router, RouteConfig, Route} from 'angular2/router'

import {NewTodo} from './new-todo';
import {TodoList} from './todo-list';
import {TodoDetail} from './todo-detail';

@Component({
  selector: 'todo-app',
  template: ` 
    <div>
     <h1>My TodoApp </h1>
     <new-todo (created)="addedTodo($event)"></new-todo>
     <router-outlet></router-outlet>
    </div>
  `,
  providers: [ROUTER_BINDINGS, TodoService],
  directives:[CORE_DIRECTIVES, ROUTER_DIRECTIVES, NewTodo, TodoList]
})
@RouteConfig([
  new Route({path: '/todos', component: TodoList, name: 'Todos'}),
  new Route({path: '/todos/:id', component: TodoDetail, name: 'TodoDetail'})
])
export class App {
  constructor(public todoService: TodoService, router: Router){
    router.navigateByUrl('/todos')
  }
  
  addedTodo(text){
    this.todoService.addTodo({
      title: text,
      completed: false
    });
  }
}


