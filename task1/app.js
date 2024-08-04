(function () {
    'use strict';


    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunchMenu = "";
        $scope.foodMsg = "";
        
        $scope.checkFood = function () {
            var input = $scope.lunchMenu.trim().split(',').filter(Boolean);
        
            if (input.length == 0) {
                $scope.foodMsg = "Please enter data first";
            } else if (input.length <= 3) {
                $scope.foodMsg = "Enjoy!";
            } else {
                $scope.foodMsg = "Too much!";
            }
        };

        $scope.getMessage = function () {          
            return $scope.foodMsg;
        };
        
        $scope.deleteMsg = function () {          
            $scope.foodMsg = "";
        };
    }



})()