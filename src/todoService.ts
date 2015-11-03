import {Injectable} from 'angular2/angular2'

@Injectable()
export class TodoService {
  header: string;
  todos: string[]
  constructor(){
    this.header = "my todo app!"
    this.todos = ['learn angular2', 'eat lunch']
  }
}