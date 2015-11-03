import {Injectable} from 'angular2/angular2'

export interface Todo {
  title: string;
  completed: boolean;
}

class TodoList extends Array {}

@Injectable()
export class TodoService {
  todos: Todo[];
  count: number = 0;
  
  constructor(){
   this.todos = [];
  }
  
  addTodo(newTodo: Todo){
    this.todos.push(newTodo);
  }
  
}