angular.module("todo-list").directive("successMsg", function () {
	return {
		templateUrl: "view/directive/success.html",
		replace: true,
		restrict: "AE",
		scope: {
         message: "@"
		},
		transclude: true
	};
});
