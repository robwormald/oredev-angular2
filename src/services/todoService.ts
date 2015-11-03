import {Injectable} from 'angular2/angular2'

export interface Todo {
  id?: number;
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
    newTodo.id = this.count++;
    this.todos.push(newTodo);
  }
  
  getTodoById(id:any){
    return this.todos.find(todo => todo.id === parseInt(id, 10));
  }
  
}