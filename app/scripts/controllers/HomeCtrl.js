(function(){
	function HomeCtrl($scope, Room, Messages){
		$scope.roomList = Room.all();

		$scope.select = function(roomId){
			if(roomId){
				$scope.activeRoom = $scope.roomList.$getRecord(roomId);
			}else{
				$scope.activeRoom = $scope.roomList[0];
			}
			$scope.messages = Room.getMessages($scope.activeRoom.$id);
		};

		$scope.send = function(){
			Messages.send($scope.messageContent, $scope.activeRoom.$id);
			$scope.messageContent = "";
		};
	};

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', 'Messages', HomeCtrl]);
})();
