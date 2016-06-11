(function(){
	function ModalCtrl($scope, $uibModal, $log){
		$scope.animationsEnabled = true;
		$scope.roomName;

		$scope.open = function(){
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl'
			});
		};
	};

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$scope', '$uibModal', '$log' , ModalCtrl]);
})();


