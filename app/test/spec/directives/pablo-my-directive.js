describe('Directive: myDirective', function() {

	beforeEach(module('myDirectiveModule'));
	beforeEach(module('templates'));

	var element,
		scope;

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		element = angular.element('<my-directive something="thing"></my-directive>');
		element = $compile(element)(scope);
		scope.thing = {name: 'My thing'};
		scope.$digest();
	}));

	it ('should render something', function() {
		var h1 = element.find('h1');
		expect(h1.text()).toBe('My thing');
	});
});