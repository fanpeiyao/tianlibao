
var myApp = angular.module("myApp",['ui.router','oc.lazyLoad','ngAnimate']);

myApp.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {


    }]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/redeem');
    $stateProvider
        .state('app',{
            url:'/app',
            templateUrl:'assets/js/a.html',
            bottom:true,
            controller:["$scope",function($scope){
            }]
        })
        .state('403',{
            url:'/403',
            template:'<div >403</div>',
            // templateUrl:'views/public/403.html?v='+version
        })



        //理财购买
        .state('purchase',{
            url:'/purchase',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"purchaseService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/purchase/css/purchase.css',
                            'assets/js/controllers/purchase-ctrl.js'
                        ]
                    });
                }]
            },
            controller:["$scope",function($scope){

            }]
        })
        .state('purchase.purchaseProcess',{
            url:'/purchaseProcess',
            title:'购买流程',
            bottom:true,
            templateUrl:'views/purchase/purchaseProcess.html',
            controller:'purchaseCtrl'
        })
      

        //赎回
        .state('redeem',{
            url:'/redeem',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"redeemService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/redeem/css/redemption.css',
                            'assets/js/controllers/redeem-ctrl.js'
                        ]
                    });
                }]
            },
            controller:["$scope",function($scope){

            }]
        })
        .state('redeem.redemption',{
            url:'/redemption',
            title:'赎回',
            bottom:true,
            templateUrl:'views/redeem/redemption.html',
            controller:'redeemCtrl'
        })
        .state('redeem.redemptionSuccess',{
            url:'/redemptionSuccess/:redeemId',
            backState:'redeem.redemption',
            title:'赎回成功',
            templateUrl:'views/redeem/redemptionSuccess.html',
            controller:'redeemSuccessCtrl'
        })
}]);