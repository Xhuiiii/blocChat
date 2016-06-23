//A reusable factory that generates the $firebaseAuth instance
(function(){
	function Auth($firebaseAuth, FirebaseUrl){
		var ref = new Firebase(FirebaseUrl);
		return $firebaseAuth(ref);
	};
	angular
		.module('blocChat')
		.factory('Auth', ['$firebaseAuth', 'FirebaseUrl', Auth]);
})();