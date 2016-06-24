(function () {
   'use strict';

   angular.module('todo-list').controller('TodoListController', TodoListController);

   TodoListController.$inject = ['$scope'];

   function TodoListController($scope){
      $scope.todo = {};
      $scope.isSave = false;
      $scope.isUpdate = false;
      $scope.isDelete = false;

      $scope.modalShown = false;

      $scope.categoryList = [
         {
            id: 1,
            name: "Work"
         },
         {
            id:2,
            name: "Home"
         }
      ];

      $scope.todoList = [
         {
            id: 1,
            dateCreate: new Date("01/06/2016"),
            name:"Reunion to CEO",
            category: $scope.categoryList[0]
         },
         {
            id: 2,
            dateCreate: new Date("03/06/2016"),
            name:"Study business plan",
            category: $scope.categoryList[1]
         }
      ];

      $scope.isNewOrEdit = false;

      $scope.new = function(){
         $scope.todo = {};
         $scope.isNewOrEdit = true;
         $scope.todo.dateCreate = new Date();
      };

      $scope.cancel = function(){
         $scope.isNewOrEdit = false;
         $scope.isUpdate = false;
         $scope.isSave = false;
         $scope.isDelete = false;
         $scope.isView= false
         delete $scope.todo;
      };

      $scope.save = function(todo){
         if(todo.id){
            for(var index in $scope.todoList){
               if($scope.todoList[index].id == todo.id)
                  $scope.todoList[index] = todo; break;
            }
            $scope.isUpdate = true;
         }else{
            todo.id = $scope.todoList.length + 1;
            $scope.todoList.push(todo);
            $scope.isSave = true;
         }
         delete $scope.todo;
         $scope.isNewOrEdit = false;
      };

      $scope.edit = function(todo){
         $scope.todo = todo;
         $scope.isNewOrEdit = true;
      };

      $scope.delete = function(todo){
         if(!$scope.modalShown)
            $scope.modalShown = !$scope.modalShown;
         $scope.todoSelectForDelete = todo;
      };

      $scope.view = function(todo){
         $scope.todo = todo;
         $scope.isNewOrEdit = true;
         $scope.isView= true;
      };
   };
})();
