(function(){
	function Messages($firebaseArray, $cookies, FirebaseUrl){
		var firebaseRef = new Firebase(FirebaseUrl);
		var messages = $firebaseArray(firebaseRef.child('messages'));

		return {
			send: function(messageContent, roomId){
				messages.$add({
					content: messageContent,
					username: $cookies.get('currentUser'), 
					roomId: roomId,
					sentAt: Firebase.ServerValue.TIMESTAMP
				});
			}
		}
	};

	angular
		.module('blocChat')
		.factory('Messages', ['$firebaseArray', '$cookies', 'FirebaseUrl', Messages]);
})();