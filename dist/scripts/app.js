(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				//Used to diable #! url
				enabled: true,
				//Required to make ui-router work
				requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			});
	};

	angular
		.module('blocChat', ['ui.router', 'firebase'])
		.config(config);
})();