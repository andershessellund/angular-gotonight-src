/*global angular */

(function() {
  "use strict";

  var module = angular.module('todomvc', []);
  module.controller('TodoCtrl', function($scope, filterFilter, todoStorage) {
    $scope.newTodo = '';

    $scope.todos = todoStorage.get();

    $scope.addTodo = function() {
      var newTodo = $scope.newTodo.trim();
      if(!newTodo.length) {
        return;
      }
      $scope.todos.push({
        title: newTodo,
        completed: false
      });
      $scope.newTodo = '';
    };

    $scope.removeTodo = function (todo) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
    };

    $scope.filters = {
      all: null,
      completed: { completed: true },
      active: { completed: false }
    };

    $scope.$watch('todos', function(newTodos, oldTodos) {
      $scope.activeCount = filterFilter($scope.todos, $scope.filters.active).length;
      $scope.completedCount = $scope.todos.length - $scope.activeCount;
      $scope.allCompleted = $scope.activeCount === 0;
      todoStorage.put($scope.todos);
    }, true);

    $scope.removeCompletedTodos = function() {
      $scope.todos = filterFilter($scope.todos, $scope.filters.active);
    };

    $scope.markAll = function(completed) {
      $scope.todos.forEach(function(todo) {
        todo.completed = completed;
      });
    };
  });
})();