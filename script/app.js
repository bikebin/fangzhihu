

	var app = angular.module('zhihu',['ui.router','Controller','ui.bootstrap','ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
		//.state('zhu',{
		//	url:'/zhu',
		//	views:{
		//		zhu:{templateUrl:'views/market.html'},
		//	}
        //
		//})
		.state('home',{
			url:'/home',
			views:{
				'home':{
					templateUrl:'views/home.html'
				},
			}

		})
		.state('home-write',{
			url:'/home-write',
			views:{
				'home-write':{
					templateUrl:'views/home-write.html'
				},


			}

		})
		.state('find',{
			url:'/find',
			views:{
				find:{
					templateUrl:'views/find.html'
				},
			},
			
		})
		.state('market',{
			url:'/market',
			views:{
				market:{
					templateUrl:'views/market.html'
				},
			}

		})
		.state('message',{
			url:'/message',
			views:{
				'message':{
					templateUrl:'views/message.html'
				},
				'messageson@message':{
					templateUrl:'views/message-news.html'
				},
			}

		})
		.state('message.news',{
			url:'/news',
			views:{
				'messageson@message':{
					templateUrl:'views/message-news.html'
				},

			}

		})
		.state('message.thanks',{
			url:'/thanks',
			views:{
				'messageson@message':{
					templateUrl:'views/message-thanks.html'
				},

			}

		})
		.state('more',{
			url:'/more',
			views:{
				more:{
					templateUrl:'views/more.html'
				},
			},


		})
		//.state('index.home',{
		//	url:'/home',
		//	templateUrl:'../views/home.html',
		//})
}]);















