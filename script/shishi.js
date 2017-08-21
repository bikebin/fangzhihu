/**
* Created by ASUS on 2017/8/16.
*/
angular.module('myApp', ['ui.bootstrap', 'ngAnimate']).controller('CarouselDemoCtrl', function ($scope) {
   $scope.myInterval = 2000;
   $scope.noWrapSlides = false;
   var slides = $scope.slides = [];
   $scope.addSlide = function () {
       var newWidth = 600 + slides.length + 1;
       slides.push({
           image: 'public/images/2015042202.jpg',
           text: '1',
       });

       slides.push({
           image: 'public/images/04.jpg',
           text: '2',
       });
       slides.push({
           image: 'public/images/01.jpg',
           text: '3',
       });
       slides.push({
           image: 'public/images/03.jpg',
           text: '4',
       });

   };
   $scope.addSlide();
});
