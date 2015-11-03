import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {TodoService, Todo} from '../services/todoService'
@Component({
  selector: 'todo-detail',
  template: '<h2>{{todo?.title}}</h2>'
})
export class TodoDetail {
  todo: Todo;
  constructor(public routeParams:RouteParams, public todoService:TodoService){
  }
  onInit(){
    this.todo = this.todoService.getTodoById(this.routeParams.get('id'));
  }
}