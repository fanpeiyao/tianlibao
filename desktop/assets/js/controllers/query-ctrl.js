/**
 * Created by chent on 2017/1/18.
 */

angular.module("myApp").controller("inquiryProcessCtrl",["$scope","$rootScope","queryService",
    function ($scope,$rootScope,queryService) {
        //星级
        $scope.star =[0,1,2,3,4]

        //主题颜色
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


        });



    
        
    }]);

angular.module("myApp").controller("inquirySuccess",["$scope","$rootScope","queryService",
    function ($scope,$rootScope,queryService) {
        console.log(111)
    }]);
