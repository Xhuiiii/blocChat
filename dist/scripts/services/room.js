(function(){
	function Room($firebaseArray){
		var firebaseRef = new Firebase("https://xhui-blocchat.firebaseio.com/");
		var rooms = $firebaseArray(firebaseRef.child('rooms'));

		return{
			add: function(roomName){
				rooms.$add({name: roomName})
			},
			remove: function(roomName){
				rooms.$remove(roomName);
			},
			all: function(){
				return rooms;
			},
			getMessages: function(roomID){
				var messagesArray = $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomID));
				return messagesArray;
			}
		};

	};

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();