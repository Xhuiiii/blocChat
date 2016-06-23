(function(){
	//$state service is provided by ui-router to control the app's state
	function AuthCtrl(Auth, $scope, $uibModalInstance, FirebaseUrl, $firebaseArray, $cookies){
		var ref = new Firebase(FirebaseUrl);
		//Synchronously retrieves the current authorisation state of the client
		var authData = ref.getAuth();
		$scope.signingIn = true;

		$scope.signInClicked = function(){
			$scope.signingIn = !$scope.signingIn;
		}

		$scope.login = function(){
			Auth.$authWithPassword({
				email: $scope.email,
				password: $scope.password
			}).then(function(){
				$cookies.put('email', $scope.email);
				$cookies.put('password', $scope.password);
				$uibModalInstance.close();
			}, function(authError){
				$scope.authError = authError;
			});
		};

		$scope.register = function(){
			Auth.$createUser({
				email: $scope.email,
				password: $scope.password
			}).then(function(){
				$firebaseArray(ref.child('users').child(authData.uid)).$add({
					provider: authData.provider,
					username: $scope.username
				});
				$scope.login();
				$uibModalInstance.close();
			}, function(authError){
				$scope.authError = authError;
			});
		};
	};

	angular
		.module('blocChat')
		.controller('AuthCtrl', ['Auth', '$scope', '$uibModalInstance', 'FirebaseUrl', '$firebaseArray', '$cookies', AuthCtrl]);
})();