(function(){
	function HomeCtrl($scope, Room, Messages, $cookies){
		$scope.roomList = Room.all();
		$scope.username = $cookies.get('currentUser');
		$scope.chatHidden = true;
		var self = this;

		$scope.select = function(roomId){
			if(roomId){
				$scope.activeRoom = $scope.roomList.$getRecord(roomId);
			}else{
				if(roomList.length >= 1)
					$scope.activeRoom = $scope.roomList[0];
			}
			if($scope.activeRoom){
				$scope.messages = Room.getMessages($scope.activeRoom.$id);
				$scope.chatHidden = false;
			}
		};

		$scope.getActive = function(roomId){
			if($scope.activeRoom){
				if($scope.activeRoom.$id == roomId){
					return "active";
				}
				else{
					return "notActive";
				}
			}
		};

		$scope.chatRoom = function(){
			this.disabled = true;
		};

		$scope.send = function(){
			Messages.send($scope.messageContent, $scope.activeRoom.$id);
			$scope.messageContent = "";
		};
	};

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', 'Messages', '$cookies', HomeCtrl]);
})();
