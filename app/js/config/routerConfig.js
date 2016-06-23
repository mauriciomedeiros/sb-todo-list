(function () {
   'use strict';

   angular
   .module('todo-list')
   .config(routerConfig);

   routerConfig.$inject = ['$routeProvider'];

   function routerConfig($routeProvider) {
      $routeProvider.when("/to-dos", {
         templateUrl: "view/todo/index.html",
         controller: "TodoListController"
      });

      $routeProvider.otherwise({
         redirectTo: "/to-dos"
      });
   }
})();
