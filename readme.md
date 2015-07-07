The examples of the unit testing with karma of angular js code is based on a posting of Pablo Villoslada Puigcerber and can be read in original at https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications .

I tried to get the karma test running and had some problems:

 1. I had to add a return statement to the syncCall method at the myServiceMock module.

 2. My test for the directives is not running at all: I always get the error "Uexpected request: GET ../templates/pablo-my-directive.html No more request expected at $httpBackend"

After googling a lot for tipps how to run directive tests with template files I have no clue how this is possible, when you also have a service test.