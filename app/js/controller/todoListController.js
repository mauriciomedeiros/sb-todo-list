(function () {
   'use strict';

   angular.module('todo-list').controller('TodoListController', TodoListController);

   TodoListController.$inject = ['$scope'];

   function TodoListController($scope){
      $scope.todoList = [{description:"Test 1", category: "Home"},
      {description:"Test 2", category: "Work"}];
      $scope.categoryList = [
         {
            id: 1,
            name: "Work"
         },
         {
            id: 2,
            name: "Home"
         }
      ];

      init();

      function init(){
         console.log("teste");
      };
   };
})();
