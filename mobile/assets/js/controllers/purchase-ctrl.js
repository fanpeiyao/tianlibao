
angular.module("myApp").controller("purchaseCtrl",["$scope","$rootScope","purchaseService",
function ($scope,$rootScope,purchaseService) {

    $scope.agreeFlag = false;
    $scope.agreeContract = function () {
        $scope.agreeFlag ?　$scope.agreeFlag　= false : $scope.agreeFlag =true
    };

    //确认购买点击事件
    $('#purchaseBtn').click(function () {
        console.log(111);
        $('#purchaseModal').modal('hide')
    })

}]);

angular.module("myApp").controller("purchaseSuccessCtrl",["$scope","$rootScope","purchaseService",
    function ($scope,$rootScope,purchaseService) {
        console.log(22)
    }]);
