import 'reflect-metadata'
import 'zone.js'

import {bootstrap, provide} from 'angular2/angular2'
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {App} from './components/app';

class TodoList {}

bootstrap(App, [
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
]);

