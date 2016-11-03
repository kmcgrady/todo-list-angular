import angular from 'angular'

import TodosCountCtrl from './header/todos_count.controller';
import PeopleCountCtrl from './header/people_count.controller';

import PeopleCtrl from './people/people.controller';
import PeopleService from './people/people.service';

import TodoListCtrl from './todos/todolist.controller';
import TodosService from './todos/todos.service';

angular.module('todoApp', [])
  .service('TodosService', TodosService)
  .service('PeopleService', PeopleService)
  .controller('PeopleCtrl', PeopleCtrl)
  .controller('TodoListCtrl', TodoListCtrl)
  .controller('TodosCountCtrl', TodosCountCtrl)
  .controller('PeopleCountCtrl', PeopleCountCtrl);
