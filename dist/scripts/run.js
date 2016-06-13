(function(){
	function BlocChatCookies($cookies, $uibModal){
		var currentUser = $cookies.get("currentUser");

		var modalTemplate = `
		<div class="modal-header">
			<h3 class="modal-title">Username</h3>
		</div>
		<div class="modal-body">
			<input type="text" ng-model="username">
		</div>
		<div class="modal-footer">
			<button class="btn btn-primary" ng-click="addUsername(username)">Set username</button>
		</div>`;

		if(!currentUser || currentUser === ''){
			console.log(currentUser);
			var userModalInstance = $uibModal.open({
				controller: 'UserModalCtrl',
				template: modalTemplate,
				backdrop: 'static',
				keyboard: false
			});
		}
	}; 

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();