
angular.module("myApp").controller("redeemCtrl",["$scope","$rootScope","redeemService",
    function ($scope,$rootScope,redeemService) {
        
        
        
        
        //确认赎回
        $scope.redeem = function () {
            console.log(3333333333)
        }
    }]);


myApp.controller("redeemSuccessCtrl",["$rootScope","$scope",'$state','$stateParams','redeemService',
    function ($rootScope,$scope,$state,$stateParams,redeemService) {
        //取得传过来的参数
        // var orderId = $stateParams.orderId;

    }]);
