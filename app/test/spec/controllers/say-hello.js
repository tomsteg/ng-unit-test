describe('Unit: MainController', function () {

	var ctrl,
		scope;

	beforeEach(module('myApp'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller('MainController', {
			$scope: scope
		});
	}));

	it ('should crate $scope.greeting when calling sayHello', function() {
		expect(scope.greeting).toBeUndefined();
		scope.sayHello();
		expect(scope.greeting).toEqual('Hello Ari');
	});
});