(function(){
	function BlocChatCookies($cookies, $uibModal){
		var currentUser = $cookies.get("currentUser");

		if(!currentUser || currentUser === ''){
			var userModalInstance = $uibModal.open({
				controller: 'AuthCtrl',
				templateUrl: 'templates/userModal.html',
				backdrop: 'static',
				keyboard: false
			});
		}
	}; 

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();