
angular.module("myApp")
.directive("iscrollWrapper",["$window",function($window){
    return{
        restrict:'E',
        transclude:true,
        templateUrl:'templates/iscroll.tpl.html',
        link:function(scope,element,attr){
            var myScroll;
            function createScroll(){
            	var ele = angular.element;
                var pullUp = ele('#pullUp'),
                	pullUpLabel = pullUp.find(".pullUpLabel"),
                	pullUpIcon = pullUp.find(".pullUpIcon"),
                	
                    pullDown = ele("#pullDown"),
                    pullDownLabel = pullDown.find(".pullDownLabel"),
                    pullDownIcon = pullDown.find(".pullDownIcon"),
                    scroller = ele("#scroller")
                    loadingStep = 0,
                    textFlag = 0;
                pullDown.hide();
                pullUp.hide();

                //init
                var wrapper = document.getElementById('iscroll-wrapper');
                if(wrapper)
                    myScroll = new IScroll(wrapper,{probeType: 2,click:true});

                //高度处理
                var head = ele('.header')[0];
                var foot = ele('.footer')[0];
                var headwrapper = ele('.wrapper-head')[0]
                var height  = $window.innerHeight - (head == undefined ? 0 :head.clientHeight) - (foot == undefined ? 0 : foot.clientHeight) -headwrapper.clientHeight;
                ele(wrapper).css("min-height",height);
                
                function setCenter(jqobj){
                	var parent = jqobj.parent();
                	var width = parent.width();
                	var half = width/2;
                	var selfhalf = jqobj.width()/2;
                	jqobj.css("margin-left",half-selfhalf)
                }
                function getAdv(){
                	var adv = ["深度对接，实时同步","移动下单，方便快捷","信息咨询，一目了然"]
                	var index = Math.round(Math.random()*3);
                	return adv[index];
                }
                //滚动时
                myScroll.on('scroll', function(){
                	if(textFlag == 0){
                        pullDownLabel.html(getAdv());
                        textFlag = 1;
                	}
                    if(loadingStep == 0 && !pullDown.attr('class').match('flip|loading')
                        && !pullUp.attr('class').match('flip|loading')){
                    	if(this.y < 20 && this.y>0){
                            pullDown.hide();
                        }
                        else if(this.y <40 && this.y>20){
                        	//显示字
                            pullDown.show();
                            setCenter(pullDownLabel);
                        }else if (this.y > 40) {
                            //下拉刷新效果
                            pullDown.show();
                            setCenter(pullDownLabel);
                            myScroll.refresh();
                            pullDown.addClass('flip');
                            loadingStep = 1;
                        }else if(this.y > (this.maxScrollY -35) && this.y < this.maxScrollY){
                            pullUp.hide();
                        }else if (this.y < (this.maxScrollY - 35)) {
                            //上拉刷新效果
                            pullUp.show();
                            setCenter(pullUpLabel);
                            setCenter(pullUpIcon);
                            myScroll.refresh();
                            pullUp.addClass('loading');
                            loadingStep = 1;
                        }
                    }
                });
                //滚动完毕
                myScroll.on('scrollEnd',function(){
                	textFlag = 0;
                    if(loadingStep == 1){
                        if (pullUp.attr('class').match('flip|loading')) {
                            pullUp.removeClass('flip').addClass('loading');
                            pullUpAction();
                        }else if(pullDown.attr('class').match('flip|loading')){
                            pullDown.addClass('loading');
                            pullDownAction();
                        }
                    }else{
                        pullDown.slideUp();
                        pullUp.hide();
                    }
                });
                //下拉刷新
                function pullDownAction () {
                		//pullDown.click();
                        setTimeout(function(){
                            pullDown.slideUp('slow');
                            pullDown.attr('class', '')
                            ele(scroller).css("min-height",ele(wrapper).height()+1);
                            loadingStep = 0;	
                        },500)
                }
                // 上拉加载
                function pullUpAction () {
                        pullUp.click();
                        setTimeout(function(){
                            pullUp.hide('slow');
                            pullUp.attr('class','')
                            ele(scroller).css("min-height",ele(wrapper).height()+1);
                            loadingStep = 0;
                        },500)
                }
                wrapper.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

                return myScroll;
            }

            angular.element(document).ready(function(){
                if(!myScroll){
                    var myScroll = createScroll();
                    scope.myScroll = myScroll;
                }
            });
        }
    }
}])
/*.directive('figuresMiss',function(){
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:"templates/figuresmissed.tpl.html?v="+version||""
        }
})*/
    .directive("fileModel",["$parse",function($parse){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind("change",function(){
                    scope.$apply(function(){
                        //获取file对象
                        modelSetter(scope,element[0].files[0]);
                        if(!scope.fileToUpload || scope.fileToUpload.type.indexOf("image") == -1){
                        	scope.showFile();
                        }else{
                        	s3.imageCompress(scope.fileToUpload,0.5,scope.showFile)
                        }
                    })
                })
            }
        }
    }])

.directive("autoHeight",['$window',function($window){
	return{
		restrict:'A',
		link:function(scope,element,attr){
			angular.element(document).ready(function(){
				 var head = angular.element('.header')[0]; 
				 var foot = angular.element('.footer')[0];
				 var height  = $window.innerHeight - (head == undefined?0:head.clientHeight) - (foot == undefined?0:foot.clientHeight);
				 element.css({"min-height":height,"max-height":height,"overflow":"scroll"});
			})
		}
	}
}])
    
  
.directive("formatDate",['$filter',function($filter){
	return {
		require:'ngModel',
		link:function(scope,element,attr,ngModelCtrl){
			ngModelCtrl.$formatters.push(function(modelValue){
				if(modelValue){
					return new Date(modelValue);
				}
			})
			ngModelCtrl.$parsers.push(function(value){
				if(value){
					return $filter('date')(value,'yyyy-MM-dd');
				}
			})
		}
	}
}])
.directive("moneyType",function(){
	return {
		restrict:"A",
		scope:{
			pointlen:'=moneyType'
		},
		link:function(scope,element,attr){
			var cursor = 0;
			var max = 15;
			scope.pointlen? pointLen=scope.pointlen : pointLen = 2;
			function getCursor(elem){
				if(elem.selectionStart !== undefined){
					return elem.selectionStart;
				}else{
					var range = document.selection.createRange();
					range.moveStart("character",-elem.value.length);
					var len = range.text.length;
					return len;
				}
			}
			angular.element(document).ready(function(){
				element.on("click",function(event){
					cursor = getCursor(event.target)
				})
				
				element.on("focus",function(event){
					cursor = event.target.value.length;
				})

				element.on("keydown",function(event){
					if(cursor >= max && event.keyCode != 8){
						cursor = max;
						return  false;
					}else{
						if((event.keyCode < 48 || event.keyCode >57) && event.keyCode != 190  && event.keyCode != 8){
							return false;
						}
						if((event.keyCode < 48 || event.keyCode >57) && pointLen == 0 && event.keyCode != 8){
							return false;
						}
						if(event.keyCode == 8 && cursor >0)
							cursor--;
						else{
							var elem = event.target;
							var text = elem.value;
							if(event.keyCode == 190){
								if(text.indexOf(".") == -1 && text.length-cursor<=pointLen){
									cursor++;
								}else{
									return false;
								}
							}else{
								var ary = text.split(".");
								var before = ary[0];
								var after = ary.length>1?ary[1]:"";
								if(cursor<=before.length && before.length >=max){
									return false;
								}
								else if(cursor > before.length && after.length >=pointLen)
									return false;
								else
									cursor++;
							}
						}
					}
				})
				
			})
		}
	}
})