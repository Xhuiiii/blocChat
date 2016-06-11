(function(){
	function HomeCtrl($scope, Room){
		$scope.roomList = Room.all();

		$scope.select = function(roomId){
			$scope.activeRoom = $scope.roomList.$getRecord(roomId);
			$scope.messages = Room.getMessages(roomId);
		};
	};

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
