
var myApp = angular.module("myApp",['ui.router','oc.lazyLoad','ngAnimate']);

myApp.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {


    }]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/app');
    $stateProvider
        .state('app',{
            url:'/app',
            templateUrl:'assets/js/a.html',
            controller:["$scope",function($scope){
            }]
        })
        .state('403',{
            url:'/403',
            template:'<div >403</div>', 
        })


        //签约
        .state('sign',{
            url:'/sign',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"signService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/sign/css/signContracts.css',
                            'assets/js/controllers/sign-ctrl.js'
                        ]
                    });
                }]
            },
            controller:["$scope",function($scope){

            }]
        })
        .state('sign.signContracts',{
            url:'/signContracts',
            templateUrl:'views/sign/signContracts.html',
            controller:'signContracts'
        })
        .state('sign.signFailure',{
            url:'/signFailure',
            templateUrl:'views/sign/signFailure.html',
            controller:'signFailureCtrl'
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
            templateUrl:'views/purchase/purchaseProcess.html',
            controller:'purchaseCtrl'
        })
        .state('purchase.purchaseSuccess',{
            url:'/purchaseSuccess',
            title:'申购成功',
            templateUrl:'views/purchase/purchaseSuccess.html',
            controller:'purchaseSuccessCtrl'
        })

        //理财查询
        .state('query',{
            url:'/query',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"queryService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/query/css/query.css',
                            'assets/js/controllers/query-ctrl.js'
                        ]
                    });
                }]
            },
            controller:["$scope",function($scope){
            }]
        })
        .state('query.inquiryProcess',{
            url:'/inquiryProcess',
            title:'查询流程',
            bottom:true,
            templateUrl:'views/query/inquiryProcess.html',
            controller:'inquiryProcessCtrl'
        })
        .state('query.inquirySuccess',{
            url:'/inquirySuccess/:queryId',
            backState:'query.inquiryProcess',
            title:'购买后查询流程',
            templateUrl:'views/query/inquirySuccess.html',
            controller:'inquirySuccess'
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


        //赎回
        .state('financial',{
            url:'/financial',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"financialService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/financial/css/financial.css',
                            'assets/js/controllers/financial-ctrl.js'
                        ]
                    });
                }]
            }

        })
        .state('financial.financialDetail',{
            url:'/financialDetail',
            templateUrl:'views/financial/financialDetail.html',
            controller:'financialDetailCtrl'
        })




        //账户信息
        .state('account',{
            url:'/account',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"accountService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/account/css/account.css',
                            'assets/js/controllers/account-ctrl.js'
                        ]
                    });
                }]
            },
            controller:["$scope",function($scope){

            }]
        })
        .state('account.info',{
            url:'/info',
            title:'修改密码',
            bottom:true,
            templateUrl:'views/account/accountInformation.html',
            controller:'accountInfoCtrl'
        })
        .state('account.changePassword',{
            url:'/changePassword',
            title:'修改密码',
            bottom:true,
            templateUrl:'views/account/changePassword.html',
            controller:'changePasswordCtrl'
        })

}]);