/**
 * Created by chent on 2017/1/18.
 */

angular.module("myApp").controller("signContracts",["$scope","$rootScope","signService",
    function ($scope,$rootScope,signService) {

        //是否同意合同
        $scope.agreeFlag = false;
        $scope.agreeContract = function () {
            $scope.agreeFlag ?　$scope.agreeFlag　= false : $scope.agreeFlag =true
        };


        //确认购买
        $scope.sign = function () {
            // $('#purchaseModal').modal('hide')
        }



    
        
}]);
angular.module("myApp").controller("signFailureCtrl",["$scope","$rootScope","signService",
    function ($scope,$rootScope,signService) {







    }]);
