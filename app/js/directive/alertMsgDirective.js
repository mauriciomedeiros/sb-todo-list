angular.module("todo-list").directive("alertMsg", function () {
	return {
		restrict: "AE",
      replace: true,
		transclude: true,
      link: function(scope, element, attrs){
         scope.no = function() {
           scope.modalShown = false;
         }
			scope.yes = function(){
				scope.todoList.splice(scope.todoList.indexOf(scope.todoSelectForDelete), 1);
	         scope.isDelete = true;
				scope.todoSelectForDelete = {};
				scope.modalShown = false;
			};
      },
      templateUrl: "view/directive/alertMsg.html"
	};
});
