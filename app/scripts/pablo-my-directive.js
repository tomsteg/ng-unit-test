angular.module('myDirectiveModule', [])
.directive('myDirective', function() {
	return {
		bindToController: true,
		controller: function() {
			var vm = this;
			vm.doSomething = doSomething;
			function doSomething() {
				vm.something.name = 'Do something';
			}
		},
		controllerAs: 'vm',
		restrict: 'E',
		scope: {
			something: '='
		},
		templateUrl: '../templates/pablo-my-directive.html'
	};
});