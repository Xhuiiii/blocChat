(function(){
	function HomeCtrl(Room){
		this.roomList = Room.all();
	};

	angular
		.module('blocChat')
		.controller('Home', ['Room', HomeCtrl]);
})();