(function(){
	function UserModalCtrl($scope, $uibModalInstance, $cookieStore){
		$scope.addUsername = function(username){
			console.log("username input: " + username);
			$cookieStore.put("currentUser", username);
			console.log("saved username: " + $cookieStore.get("currentUser"));
			$uibModalInstance.close();
		};
	}; 

	angular 
		.module('blocChat')
		.controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookieStore', UserModalCtrl]);
})(); 