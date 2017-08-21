/**
 * Created by ASUS on 2017/8/14.
 */

angular.module('Controller',[])
/*************脚菜单栏***************/
.controller('footController',['$scope',function($scope){

    $scope.footmenu = [
        {link:'home',text:"首页",icon:'icon-home-outline'},
        {link:'find',text:"发现",icon:'icon-eye'},
        {link:'market',text:"市场",icon:'icon-calendar'},
        {link:'message',text:"信息",icon:'icon-bell'},
        {link:'more',text:"更多",icon:'icon-profile'}
    ];
}])
/******************more控制器*******************/
.controller('moreController',['$scope',function($scope){

        $scope.spanClick = function(){
            $('body').hasClass('changeColor')?$('body').removeClass('changeColor'):$('body').addClass('changeColor');


        }
    }])

/******************find控制器*******************************/
.controller('findController',['$scope','$http','$filter','$rootScope', function ($scope, $http, $filter,$rootScope){
        var today = $filter('date')(new Date, 'yyyy-MM-dd');
        $rootScope.loaded = false;
        $http({
            url: './api/find.php', // 请求地址，解决跨域问题
            method: 'get',
            params: {today: today}
        }).then(function (info) {
            console.log(info);
            $rootScope.loaded = true;
            // 日期
            // $scope.date = info.date;
            // 文章数据
            $scope.data= info.data;
        });
        
           // $scope.myInterval = 2000;
           // $scope.noWrapSlides = false;
           // var slides = $scope.slides = [];
           // $scope.addSlide = function () {
           //     var newWidth = 600 + slides.length + 1;
           //     slides.push({
           //         image: 'public/images/2015042202.jpg',
           //         text: '1',
           //     });
   
           //     slides.push({
           //         image: 'public/images/04.jpg',
           //         text: '2',
           //     });
           //     slides.push({
           //         image: 'public/images/01.jpg',
           //         text: '3',
           //     });
           //     slides.push({
           //         image: 'public/images/03.jpg',
           //         text: '4',
           //     });
   
           // };
           // $scope.addSlide();
    }])
/***************************market控制器***********************************/
//.controller('CarouselDemoCtrl',['$scope',function ($scope) {
//        $scope.myInterval = 2000;
//        $scope.noWrapSlides = false;
//        var slides = $scope.slides = [];
//        $scope.addSlide = function () {
//            var newWidth = 600 + slides.length + 1;
//            slides.push({
//                image: 'public/images/2015042202.jpg',
//                text: '1',
//            });
//
//            slides.push({
//                image: 'public/images/04.jpg',
//                text: '2',
//            });
//            slides.push({
//                image: 'public/images/01.jpg',
//                text: '3',
//            });
//            slides.push({
//                image: 'public/images/03.jpg',
//                text: '4',
//            });
//
//        };
//        $scope.addSlide();
//    }]);













