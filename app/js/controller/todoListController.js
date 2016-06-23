(function () {
   'use strict';

   angular.module('todo-list').controller('TodoListController', TodoListController);

   TodoListController.$inject = ['$scope'];

   function TodoListController($scope){
      $scope.todo = {};

      $scope.categoryList = [
         {
            name: "Work"
         },
         {
            name: "Home"
         }
      ];

      $scope.todoList = [{name:"Test 1", category: $scope.categoryList[0]},
      {name:"Test 2", category: $scope.categoryList[1]}];

      $scope.isNewOrEdit = false;

      $scope.new = function(){
         $scope.todo = {};
         $scope.isNewOrEdit = true;
         $scope.todo.dateCreate = new Date();
      };

      $scope.cancel = function(){
         $scope.isNewOrEdit = false;
         delete $scope.todo;
      };

      $scope.save = function(todo){
         $scope.todoList.push(todo);
         delete $scope.todo;
         $scope.isNewOrEdit = false;
      };
   };
})();
