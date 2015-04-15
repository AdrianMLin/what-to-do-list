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
		self.octopus = "octopu!s";
		var userId = $('#session-id').val();
		var myData;
		self.todoItems;

		$.get('/users/' + userId + '/todos', function(data){
			console.log(data);
			myData = data;
			self.todoItems = [];

			for (var i = 0; i < myData.length; i++){
				self.todoItems.push(myData[i]);
			}
		});

		self.decision = "";
		self.whatToDo = function(){
			var randIndex = Math.floor(Math.random() * myData.length);
			var randItem = myData[ randIndex ];
			var decision = randItem.name;
			self.decision = decision;
		}


	})
;

