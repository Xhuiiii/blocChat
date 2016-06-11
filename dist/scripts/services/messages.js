(function(){
	function Messages($firebaseArray, $cookies){
		var firebaseRef = new Firebase("https://xhui-blocchat.firebaseio.com/");
		var messages = $firebaseArray(firebaseRef.child('messages'));

		return {
			send: function(messageContent, roomId){
				messages.$add({
					content: messageContent,
					username: $cookies.get('blocChatCurrentUser'), 
					roomId: roomId,
					sentAt: Firebase.ServerValue.TIMESTAMP
				});
			}
		}
	};

	angular
		.module('blocChat')
		.factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();