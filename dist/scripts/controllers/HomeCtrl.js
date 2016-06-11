(function(){
	function HomeCtrl($scope, Room, Messages){
		$scope.roomList = Room.all();

		$scope.select = function(roomId){
			$scope.activeRoom = $scope.roomList.$getRecord(roomId);
			$scope.messages = Room.getMessages(roomId);
		};

		$scope.send = function(){
			Messages.send($scope.messageContent, $scope.activeRoom);
			$scope.messageContent = "";
		};
	};

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', 'Messages', HomeCtrl]);
})();
