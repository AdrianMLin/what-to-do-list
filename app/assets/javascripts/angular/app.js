console.log('this is connected!');

angular.module('timeApp', ['ui.router'])

	.directive('event', function(){
		return {
			restrict: 'E',
			templateUrl: '',
			scope: {
				eventObject: '='
			}
		}
	})

	.controller('ProfileController', function(){
		var self = this;
		var userId = $('#session-id').val();
		var myData = $.get('/users/' + userId + '/todos', function(data){
			console.log(data);
		}).done( function(){
			debugger
		});
		self.todos = [];

	})
;

