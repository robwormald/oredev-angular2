import {Component} from 'angular2/angular2';

@Component({
  selector: 'todo-item',
  template: `
    <div>
      {{todo.title}}: {{todo.completed}}
    </div>
  `,
  inputs: ['todo']
})
export class TodoItem {
  constructor(){
    console.log('new todo item')
  }
}