import {Component, FORM_DIRECTIVES, EventEmitter, Control} from 'angular2/angular2'
import {Http} from 'angular2/http';

@Component({
  outputs: ['created'],
  selector: 'new-todo',
  template: `
    <input type="text" [ng-form-control]="textInput">
    <button (click)="addTodo(newtodoinput)">add todo</button>
  `,
  directives: [FORM_DIRECTIVES],
  bindings: [Http]
})
export class NewTodo {
  textInput = new Control();
  created = new EventEmitter()
  constructor(){
   this.textInput.valueChanges.toRx()
     .map(v => {
       console.log(v);
       return `http://foo.com/search/${v}`
     })
     .subscribe(v => console.log(v))
    
  }
  addTodo(newtodoinput){
    this.created.next(newtodoinput.value);
    newtodoinput.value = '';
  }
}