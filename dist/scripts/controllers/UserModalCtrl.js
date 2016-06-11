(function(){
	function UserModalCtrl($scope, $uibModalInstance, $cookies){
		$scope.addUsername = function(username){
			$cookies.put('blocChatCurrentUser', username);
			$uibModalInstance.close();
		};
	}; 

	angular 
		.module('blocChat')
		.controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})(); 