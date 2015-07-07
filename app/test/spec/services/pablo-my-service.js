describe('Service: MyService', function() {

	beforeEach(module('myServiceModule'));

	var myService,
		httpBackend;

	beforeEach(inject(function($httpBackend, _myService_) {
		httpBackend = $httpBackend;
		myService = _myService_;
	}));

	describe('Output of methods', function() {

		it ('should return the product of all positive integers less than or equal to n', function() {
			expect(myService.factorial(0)).toBe(1);
			expect(myService.factorial(5)).toBe(120);
			expect(myService.factorial(10)).toBe(3628800);
		});

	});

	describe('HTTP calls', function() {

		afterEach(function() {
			httpBackend.verifyNoOutstandingExpectation();
			httpBackend.verifyNoOutstandingRequest();
		});

		it ('should call the API', function() {
			httpBackend.expectGET(/\/api\/things/).respond('');
			myService.getThings();
			httpBackend.flush();
		});

		var myThings,
			errorStatus = '',
			handler;

		beforeEach(function() {
			myThings = [];
			errorStatus = '';
			handler = {
				success: function(data) {
					myThings = data;
				},
				error: function(data) {
					errorStatus = data;
				}
			};
			spyOn(handler, 'success').and.callThrough();
			spyOn(handler, 'error').and.callThrough();
		});

		it ('should return an array of things on success', function() {

			var response = ['one thing', 'another thing'];
			httpBackend.whenGET(/\/api\/things/).respond(response);
			myService.getThings().then(handler.success, handler.error);
			httpBackend.flush();

			expect(handler.success).toHaveBeenCalled();
			expect(myThings).toEqual(response);
			expect(handler.error).not.toHaveBeenCalled();
			expect(errorStatus).toEqual('');
		});

		it ('should return the status on error', function() {
			httpBackend.whenGET(/\/api\/things/).respond(404, {status: 404});
			myService.getThings().then(handler.success, handler.error);
			httpBackend.flush();

			expect(handler.error).toHaveBeenCalled();
			expect(errorStatus).toEqual(404);
			expect(handler.success).not.toHaveBeenCalled();
			expect(myThings).toEqual([]);
		});
	});

});