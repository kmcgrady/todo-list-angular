import angular from 'angular'

import PeopleCtrl from './people/people.controller';
import TodoListCtrl from './todos/todolist.controller';

angular.module('todoApp', [])
  .controller('PeopleCtrl', PeopleCtrl)
  .controller('TodoListCtrl', TodoListCtrl);
