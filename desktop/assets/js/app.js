
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
            controller:'signCtrl'
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


               /* //主题颜色
                var themeLink , theme, arear, backs, weekChart;
                angular.element('#changeTheme')[0] ? themeLink = angular.element('#changeTheme')[0].href : '';

                themeLink ? theme = themeLink.split('css')[1] : theme = '/blue.';
                backs = { '/red.': '#c7000b', '/blue.': '#418ce2', '/blue.Area': '#e5f1ff', '/red.Area': '#ffeded'};
                arear = theme + 'Area'
                // 近七日图表
                weekOption = $(function () {
                    weekChart = echarts.init(angular.element('#weekChart')[0]);
                    weekOption = {
                        grid: {
                            x:40,
                            y: 20,
                            x2: '5%',
                            y2: 30,
                        },
                        tooltip: {
                            trigger: 'axis',
                            backgroundColor: backs[theme],
                            borderRadius: 0,
                            padding: [0, 3],
                            position: function (p) {
                                return [p[0] + 10, p[1] - 10];
                            },
                            textStyle: {
                                decoration: 'none',
                                fontSize: 10,
                            },
                            formatter: function (params, ticket, callback) {
                                return params[0].data+'%';
                            }
                        },
                        backgroundColor: '#fff',
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['06-11', '', '', '06-14', '', '', '06-20'],
                            //控制网格线是否展示
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    color: ['#f1f1f1']
                                },
                            },
                            axisLine: {
                                lineStyle: {
                                    color: backs[theme],
                                },
                                onZero: false,
                            },
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ';
                                    }
                                }
                            },
                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#999'
                                },
                            },
                            min: 4.60,
                            max: 5.00,
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            splitLine: { show: false },
                            axisTick: { show: false },
                        },
                        series: [{
                            data: [4.82, 4.84, 4.85, 4.86, 4.8920, 4.91, 4.89],
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    color: backs[theme],  //连线颜色
                                    areaStyle: {
                                        color: backs[arear],
                                    },
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 1,  //连线粗细
                                    color: backs[theme]  //连线颜色
                                }
                            },
                            tooltip: {
                                trigger: 'axis'
                            }
                        }]
                    };
                    // 使用刚指定的配置项和数据显示图表。
                    weekChart.setOption(weekOption);


                });*/
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



        //账户信息
        .state('accountInfo',{
            url:'/accountInfo',
            template:'<div ng-class="transition" ui-view></div>',
            abstract:true,
            resolve:{
                service1:"accountInfoService",
                service:['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:[
                            'views/accountInfo/css/accountInfo.css',
                            'assets/js/controllers/accountInfo-ctrl.js'
                        ]
                    });
                }]
            },
            controller:["$scope",function($scope){

            }]
        })
        .state('accountInfo.changePassword',{
            url:'/changePassword',
            title:'修改密码',
            bottom:true,
            templateUrl:'views/accountInfo/changePassword.html',
            controller:'changePasswordCtrl'
        })

}]);