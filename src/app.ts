import {Component, Injectable, CORE_DIRECTIVES, FORM_DIRECTIVES, NgModel} from 'angular2/angular2';
import {Navbar} from './navbar';
import {TodoService} from './todoService'

@Component({
  selector: 'demo-app',
  template: ` 
    <div>
     <nav-bar></nav-bar>
     <ul>
       <li *ng-for="#todo of todoService.todos">{{todo}}</ul>
     </ul>
    </div>
  `,
  providers: [TodoService],
  directives:[Navbar, CORE_DIRECTIVES]
})
export class App {
  name: string = "Rob"
  people: string[];
  
  constructor(todoService: TodoService){
    this.todoService = todoService;
  }
 
}

