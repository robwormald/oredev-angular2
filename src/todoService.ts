import {Injectable} from 'angular2/angular2'

export interface Todo {
  title: string;
  completed: boolean;
}


@Injectable()
export class TodoService {
  todos: Todo[];
  constructor(){
   this.todos = [];
  }
  
  addTodo(newTodo: Todo){
    this.todos.push(newTodo);
  }
  
}