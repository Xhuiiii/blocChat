(function(){
	function ModalInstanceCtrl($scope, $uibModalInstance, Room){
		$scope.createRoom = function(){
			Room.add($scope.roomName);
			$uibModalInstance.close();
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		};
	};

	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();