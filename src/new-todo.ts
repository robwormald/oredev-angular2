import {Component, EventEmitter} from 'angular2/angular2'

@Component({
  outputs: ['created'],
  selector: 'new-todo',
  template: `
    <input type="text" #newtodoinput>
    <button (click)="addTodo(newtodoinput)">add todo</button>
  `
})
export class NewTodo {
  created = new EventEmitter()
  addTodo(newtodoinput){
    this.created.next(newtodoinput.value);
    newtodoinput.value = '';
  }
}