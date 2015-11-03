import {Component} from 'angular2/angular2';
import {TodoService} from './todoService'

@Component({
  selector: 'nav-bar',
  template: '<div>I am a navbar</div>'
})
export class Navbar {
  constructor(todoService:TodoService){
    console.log(todoService)
  }
}