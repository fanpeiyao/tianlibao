
angular.module("myApp").controller("purchaseCtrl",["$scope","$rootScope","purchaseService",
function ($scope,$rootScope,purchaseService) {
    //默认选择支付方式 --- 快捷支付
    $scope.payCard = 1;
    //是否同意合同
    $scope.agreeFlag = false;
    $scope.agreeContract = function () {
        $scope.agreeFlag ?　$scope.agreeFlag　= false : $scope.agreeFlag =true
    };


    //确认购买
    $scope.purchase = function () {
        $('#purchaseModal').modal('hide')
    }
}]);

angular.module("myApp").controller("purchaseSuccessCtrl",["$scope","$rootScope","purchaseService",
    function ($scope,$rootScope,purchaseService) {
        console.log(22)
    }]);
