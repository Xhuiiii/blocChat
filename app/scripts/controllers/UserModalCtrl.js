(function(){
	function UserModalCtrl($scope, $uibModalInstance, $cookies){
		$scope.addUsername = function(username){
			console.log("username input: " + username);
			$cookies.put("currentUser", username);
			console.log("saved username: " + $cookies.get("currentUser"));
			$uibModalInstance.close();
		};
	}; 

	angular 
		.module('blocChat')
		.controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})(); 