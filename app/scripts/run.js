(function(){
	function BlocChatCookies($cookies, $uibModal){
		console.log("BlocChatCookies function");
		var currentUser = $cookies.get('blocChatCurrentUser');

		var modalTemplate = `
		<div class="modal-header">
			<h3 class="modal-title">Username</h3>
			</div>
			<div class="modal-body">
			<input type="text" ng-model="username">
			</div>
			<div class="modal-footer">
				<button class="btn btn-primary" ng-click="addUsername(Username)">Set username</button>\
		</div>`;

		if(!currentUser || currentUser === ''){
			var uibModalInstance = $uibModal.open({
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