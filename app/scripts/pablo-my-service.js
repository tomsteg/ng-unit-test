angular.module('myServiceModule', [])
.service('myService', MyService);

function MyService ($http, $q) {

	var f = [];

	this.factorial = factorial;
	this.getThings = getThings;

	function factorial (n) {
		if (n === 0 || n === 1) { return 1; }
		if (f[n] > 0) { return f[n]; }
		f[n] = factorial(n-1) * n;
		return f[n];
	}

	function getThings() {
		return $http.get('/api/things').then(
			function(response) {
				return response.data;
			},
			function(error) {
				return $q.reject(error.status);
			}
		);
	}
}