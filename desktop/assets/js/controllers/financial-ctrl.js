
angular.module("myApp").controller("financialDetailCtrl",["$scope","$rootScope","financialService",
    function ($scope,$rootScope,financialService) {


        //圆饼报表
        pieChart = echarts.init(angular.element('#pieEarchs')[0]);

        pieOption = {
            tooltip: {
                show: false,
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:[]
            },
            series: [
                {
                    name:'添利宝',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '16',
                                color:'#999'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:50, name:'资产占比'},
                        {value:50, name:'联盟广告'},
                        {value:50, name:'视频广告'},
                        {value:50, name:'sss'}
                    ]
                }
            ],
            color: ['#3499fc','#0f5dcd','#fec535','#fdaa29']

        };
        // 使用刚指定的配置项和数据显示图表。
        pieChart.setOption(pieOption);

    }]);


